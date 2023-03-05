#region Cat5Bot
// string Cat5BotTokenPath = $"{Directory.GetCurrentDirectory()}/Cat5BotToken.secret";

/*
if (File.Exists(Cat5BotTokenPath))
{
    using var db = new LiteDatabase($"{Directory.GetCurrentDirectory()}/Cat5Bot.db");
    await Category5Bot.MainAsync(File.ReadAllText(Cat5BotTokenPath), db);
    Console.ReadLine();
    return;
}
*/
#endregion Cat5Bot

#region Category5Scouting
#region Load TBA Data
string TbaApiKeyPath = $"{Directory.GetCurrentDirectory()}/TbaApiKey.secret";
IReadOnlyList<TeamSimpleSchema> teams = null!;
if (File.Exists(TbaApiKeyPath))
{
    string eventKey = "2023scand";
    string apiKey = File.ReadAllText(TbaApiKeyPath);
    HttpClient http = new();
    string endpoint = $"https://www.thebluealliance.com/api/v3/event/{eventKey}/teams/simple?X-TBA-Auth-Key={apiKey}";
    string json = await http.GetStringAsync(endpoint);
    teams = JsonSerializer.Deserialize<List<TeamSimpleSchema>>(json)!;
/*    foreach (var team in teams)
    {
        team.PrintProperties();
    }*/
}
#endregion Load TBA Data

var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseStaticFiles();
app.UseRouting();

ConcurrentDictionary<string, string> data = new();

/*Processor<Context> processor = new();
var processorTask = processor.RunAsync();*/

app.MapGet("/api/get", (string key) =>
{
    if (!data.TryGetValue(key, out var value))
    {
        value = "";
    }
    return value;
});

app.MapGet("/api/set", (string key, string value) =>
{
    data[key] = value;
    return "";
});

app.Map("/api/teams", () =>
{
    return Json.Serialize(teams);
});

#region Archive
/*processor.Process("Add Default Scouters", (ctx) =>
{
    ctx.scouters.AddRange(new List<Scouter>() {
        new Scouter(Guid.NewGuid().ToString(), "Mr. Blake"),
        new Scouter(Guid.NewGuid().ToString(), "Ben"),
        new Scouter(Guid.NewGuid().ToString(), "Connor"),
        new Scouter(Guid.NewGuid().ToString(), "Van")
    });
});*/

/*app.MapGet("/api/stop", () =>
{
    processor.Stop();
});

app.MapGet("/api/scouter/list", () =>
{
    return processor.Process("/api/scouter/list", (ctx) =>
    {
        return Json.Serialize(ctx.scouters);
    });
});

app.MapGet("/api/scouter/create", (string name) =>
{

    return processor.Process("/api/scouter/create", (ctx) =>
    {
        Scouter scouter = new(Guid.NewGuid().ToString(), name);
        ctx.scouters.Add(scouter);
        return Json.Serialize(ctx.scouters);
    });
});

app.MapGet("/api/scouter/delete", (string id) =>
{

    return processor.Process("/api/scouter/delete", (ctx) =>
    {
        ctx.scouters.RemoveAll(s => s.Id == id);
        return Json.Serialize(ctx.scouters);
    });
});

app.MapGet("/api/clicker/clicked", (string id) =>
{
    return processor.Process("/api/clicker/clicked", (ctx) =>
    {
        var scouter = ctx.scouters.Find(scouter => scouter.Id == id);
        if (scouter is not null)
        {
            return ctx.cookieClickerManager.Click(scouter.Id, scouter.Name);
        }
        return 0ul;
    });
});

app.MapGet("/api/clicker/cookies", (string id) =>
{
    return processor.Process("/api/clicker/cookies", (ctx) =>
    {
        // TODO make method to check if scouter with id exists
        if (ctx.scouters.Any(scouter => scouter.Id == id))
        {
            return ctx.cookieClickerManager.GetCookies(id);
        }
        return 0ul;
    });
});

app.MapGet("/api/clicker/leaderboard", () =>
{
    return processor.Process("/api/clicker/leaderboard", (ctx) =>
    {
        var leaderboard = ctx.cookieClickerManager.GetLeaderboard();
        return Json.Serialize(leaderboard);
    });
});

app.MapGet("/api/weather-forecast", () =>
{
    string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    return Enumerable.Range(1, 10).Select(index => new WeatherForecast(
        DateTime.Now.AddDays(index),
        Random.Shared.Next(-20, 55),
        Summaries[Random.Shared.Next(Summaries.Length)]
    ));
});*/
#endregion Archive

app.MapFallbackToFile("index.html");

var serverTask = app.Environment.IsDevelopment() ? app.RunAsync("http://*:5194") : app.RunAsync("http://*:44464");
// await processorTask;
await serverTask;
#endregion Category5Scouting