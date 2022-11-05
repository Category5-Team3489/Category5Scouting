using Microsoft.AspNetCore.Mvc;
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

app.MapGet("/scouters", () =>
{
    lock (scoutersLock)
    {
        return scouters;
    }
});

app.MapGet("/add-scouter", (string name) => {

    lock (scoutersLock)
    {
        scouters.Add(new Scouter(Guid.NewGuid().ToString(), name));
        return scouters;
    }
});

app.MapFallbackToFile("index.html");

app.Run();

record Scouter(string Id, string Name);