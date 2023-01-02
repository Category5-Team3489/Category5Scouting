namespace Category5Scouting.General;

public record Scouter(string Id, string Name);

public record WeatherForecast(DateTime Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}