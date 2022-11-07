using System.Diagnostics;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
}

app.UseStaticFiles();
app.UseRouting();

// https://stackoverflow.com/questions/68132539/react-ignores-net-5-routing
// just adding endpoints to setupProxy.js for now
// FIXED: just one /api endpoint, everything uses that
// app.MapControllerRoute(name: "default", pattern: "{controller}/{action=Index}/{id?}");

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


/*
 *     // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
 */

//https://stackoverflow.com/questions/37230555/get-with-query-string-with-fetch-in-react-native

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

app.MapFallbackToFile("index.html");

var serverTask = app.RunAsync();
await processorTask;