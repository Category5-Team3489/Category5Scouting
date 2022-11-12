using System.Diagnostics;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseStaticFiles();
app.UseRouting();
// app.MapControllerRoute(name: "default", pattern: "{controller}/{action=Index}/{id?}"); For controllers

Processor processor = new();
var processorTask = processor.RunAsync();

processor.Process("Add Default Scouters", (ctx) =>
{
    ctx.scouters.AddRange(new List<Scouter>() {
        new Scouter(Guid.NewGuid().ToString(), "Mr. Blake"),
        new Scouter(Guid.NewGuid().ToString(), "Ben"),
        new Scouter(Guid.NewGuid().ToString(), "Connor")
    });
});

#region Endpoints
app.MapGet("/api/stop", () =>
{
    processor.Stop();
});

app.MapGet("/api/scouter/list", () =>
{
    return processor.Process("/api/scouter/list", (ctx) =>
    {
        return ctx.Serialize(ctx.scouters);
    });
});

app.MapGet("/api/scouter/create", (string name) => {

    return processor.Process("/api/scouter/create", (ctx) =>
    {
        Scouter scouter = new(Guid.NewGuid().ToString(), name);
        ctx.scouters.Add(scouter);
        return ctx.Serialize(ctx.scouters);
    });
});

app.MapGet("/api/scouter/delete", (string id) => {

    return processor.Process("/api/scouter/delete", (ctx) =>
    {
        ctx.scouters.RemoveAll(s => s.Id == id);
        return ctx.Serialize(ctx.scouters);
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
        return ctx.Serialize(leaderboard);
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
});
#endregion Endpoints

app.MapFallbackToFile("index.html");

var serverTask = app.RunAsync(); //"http://*:6567"
await processorTask;