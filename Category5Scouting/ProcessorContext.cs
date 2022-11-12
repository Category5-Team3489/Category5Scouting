namespace Category5Scouting;

public class ProcessorContext
{
    // Add data and code here is only ever touched by one thread at a time

    public readonly List<Scouter> scouters = new();
    public readonly CookieClickerManager cookieClickerManager = new();

    private bool isInit = false;
    public void Update()
    {
        if (!isInit)
        {
            isInit = true;
            // Init code
        }

        // Update code
    }

    public string Serialize<TValue>(TValue value)
    {
        return JsonUtils.Serialize(value);
    }
}
