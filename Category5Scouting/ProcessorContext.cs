namespace Category5Scouting;

public class ProcessorContext
{
    // Add data and code here is only ever touched by one thread at a time

    public readonly List<Scouter> scouters = new();
    public readonly CookieClickerManager cookieClickerManager = new();

    public void Start()
    {
        // Start code
    }
    public void Update()
    {
        // Update code
    }
    public void Stop()
    {
        // Stop code
    }

    public string Serialize<TValue>(TValue value)
    {
        return JsonUtils.Serialize(value);
    }
}
