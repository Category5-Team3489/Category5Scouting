var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseStaticFiles();
app.UseRouting();
// app.MapControllerRoute(name: "default", pattern: "{controller}/{action=Index}/{id?}"); For controllers

Processor processor = new();
var processorTask = processor.BeginProcessing();

processor.Process("Add Default Scouters", (ctx) =>
{
    ctx.scouters.AddRange(new List<Scouter>() {
        new Scouter(Guid.NewGuid().ToString(), "Mr. Blake"),
        new Scouter(Guid.NewGuid().ToString(), "Ben"),
        new Scouter(Guid.NewGuid().ToString(), "Connor")
    });
});

#region Endpoints
app.MapGet("/api/end", () =>
{
    processor.EndProcessing();
});

app.MapGet("/api/scouters", () =>
{
    return processor.Process("/scouters", (ctx) =>
    {
        return ctx.Serialize(ctx.scouters);
    });
});

app.MapGet("/api/create-scouter", (string name) => {

    return processor.Process("/create-scouter", (ctx) =>
    {
        ctx.scouters.Add(new Scouter(Guid.NewGuid().ToString(), name));
        return ctx.Serialize(ctx.scouters);
    });
});

app.MapGet("/api/delete-scouter", (string id) => {

    return processor.Process("/delete-scouter", (ctx) =>
    {
        ctx.scouters.RemoveAll(s => s.Id == id);
        return ctx.Serialize(ctx.scouters);
    });
});

app.MapGet("/api/weatherforecast", () =>
{
    string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    return Enumerable.Range(1, 50).Select(index => new WeatherForecast(
        DateTime.Now.AddDays(index),
        Random.Shared.Next(-20, 55),
        Summaries[Random.Shared.Next(Summaries.Length)]
    ));
});
#endregion Endpoints

app.MapFallbackToFile("index.html");

var serverTask = app.RunAsync(); //"http://*:6567"
await processorTask;