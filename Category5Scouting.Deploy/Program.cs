using Category5Scouting.Deploy;

using System.Diagnostics;
using System.IO.Compression;
using System.Security.Cryptography;
using System.Text;

if (Hash(Environment.MachineName) != "1767f1741052843c1557aeb6a86102cd4c35be66d3e6955583582218e087142c")
{
    return;
}

if (args.Length > 0)
{
    Process.Start(new ProcessStartInfo { UseShellExecute = true, Arguments = @"/C ""E:\Projects\Visual Studio\Category5Scouting\Category5Scouting\deploy\Category5Scouting.Deploy.exe""", FileName = "cmd", WindowStyle = ProcessWindowStyle.Normal });
    return;
}

static string Hash(string text)
{
    using (SHA256 sha256Hash = SHA256.Create())
    {
        byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(text));

        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < bytes.Length; i++)
        {
            builder.Append(bytes[i].ToString("x2"));
        }
        return builder.ToString();
    }
}

Console.WriteLine("[Category5Scouting.Deploy]: begin");

string dir = Directory.GetCurrentDirectory();
string key = File.ReadAllText(dir + @"\deploy\key.secret");
string publishDir = dir + @"\bin\Release\net6.0\publish";
string publishZipFile = dir + @"\deploy\Category5Scouting.zip";

string deployScript = dir + @"\deploy\deploy.sh";
string startScript = dir + @"\deploy\start.sh";
string stopScript = dir + @"\deploy\stop.sh";

if (File.Exists(publishZipFile))
{
    File.Delete(publishZipFile);
}

Console.WriteLine("[Category5Scouting.Deploy]: zipping application...");
ZipFile.CreateFromDirectory(publishDir, publishZipFile, CompressionLevel.Optimal, false);

MetaCoeratorClient coerator = new(key);

Console.WriteLine("[Category5Scouting.Deploy]: uploading stop.sh...");
_ = await coerator.Upload(stopScript, "/root/stop.Category5Scouting.sh");
Console.WriteLine("[Category5Scouting.Deploy]: executing stop.sh...");
_ = await coerator.Execute("/root/stop.Category5Scouting.sh");

Console.WriteLine("[Category5Scouting.Deploy]: uploading application...");
_ = await coerator.Upload(publishZipFile, "/root/Category5Scouting.zip");

Console.WriteLine("[Category5Scouting.Deploy]: uploading deploy.sh...");
_ = await coerator.Upload(deployScript, "/root/deploy.Category5Scouting.sh");
Console.WriteLine("[Category5Scouting.Deploy]: executing deploy.sh...");
_ = await coerator.Execute("/root/deploy.Category5Scouting.sh");

Console.WriteLine("[Category5Scouting.Deploy]: uploading start.sh...");
_ = await coerator.Upload(startScript, "/root/start.Category5Scouting.sh");
Console.WriteLine("[Category5Scouting.Deploy]: executing start.sh...");
_ = await coerator.Execute("/root/start.Category5Scouting.sh");

Console.WriteLine("[Category5Scouting.Deploy]: end");