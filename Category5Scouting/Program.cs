using Category5Scouting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Text.Json.Nodes;

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
app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");
//app.MapControllers();

object scoutersLock = new();
List<Scouter> scouters = new();
lock (scoutersLock)
{
    scouters.Add(new Scouter(Guid.NewGuid().ToString(), "Mr. Blake"));
    scouters.Add(new Scouter(Guid.NewGuid().ToString(), "Ben"));
    scouters.Add(new Scouter(Guid.NewGuid().ToString(), "Connor"));
}

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

app.MapGet("/api/scouters", () =>
{
    lock (scoutersLock)
    {
        return scouters;
    }
});

app.MapGet("/api/create-scouter", (string name) => {

    lock (scoutersLock)
    {
        scouters.Add(new Scouter(Guid.NewGuid().ToString(), name));
        return scouters;
    }
});

app.MapGet("/api/delete-scouter", (string id) => {

    lock (scoutersLock)
    {
        scouters.RemoveAll(s => s.Id == id);
        return scouters;
    }
});

string[] Summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/api/weatherforecast", () =>
{
    return Enumerable.Range(1, 5).Select(index => new WeatherForecast(
        DateTime.Now.AddDays(index),
        Random.Shared.Next(-20, 55),
        Summaries[Random.Shared.Next(Summaries.Length)]
    ));
});

app.MapFallbackToFile("index.html");

app.Run();

record Scouter(string Id, string Name);
record WeatherForecast(DateTime Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}