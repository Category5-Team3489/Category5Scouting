using System.Text.Json;

namespace Category5Scouting.General;

public class Json
{
    public static string Serialize<TValue>(TValue value)
    {
        var options = new JsonSerializerOptions { PropertyNamingPolicy = new JsonLowerCaseNamingPolicy() };
        return JsonSerializer.Serialize(value, options);
    }

    private class JsonLowerCaseNamingPolicy : JsonNamingPolicy
    {
        public override string ConvertName(string name) =>
            name.ToLower();
    }
}