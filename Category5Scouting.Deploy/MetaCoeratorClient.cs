using System.IO.Compression;
using System.Text;

namespace Category5Scouting.Deploy;

public sealed class MetaCoeratorClient
{
    private readonly static HttpClient Http = new();
    private readonly string key;

    public MetaCoeratorClient(string key)
    {
        this.key = key;
    }

    public async Task<HttpResponseMessage> Upload(string file, string dest)
    {
        using FileStream fi = File.OpenRead(file);
        using MemoryStream fo = new();
        using (GZipStream fg = new(fo, CompressionMode.Compress))
        {
            await fi.CopyToAsync(fg);
        }
        return await Http.PostAsync(GetUri("upload", ("dest", dest)), new ByteArrayContent(fo.ToArray()));
    }

    public async Task<HttpResponseMessage> Delete(params string[] files)
    {
        return await Http.GetAsync(GetUri("delete", ("files", string.Join(',', files))));
    }

    public async Task<HttpResponseMessage> Execute(string script)
    {
        return await Http.GetAsync(GetUri("execute", ("script", script)));
    }

    private string GetUri(string endpoint, params (string key, string value)[] queryParams)
    {
        List<string> query = new();
        foreach ((string key, string value) in queryParams)
        {
            query.Add($"{key}={value}");
        }
        return $"http://104.167.228.184/{endpoint}?key={key}&{string.Join('&', query)}";
    }
}