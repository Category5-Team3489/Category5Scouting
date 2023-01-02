namespace Category5Scouting.General;

public class Context : IContext
{
    // Add data and code here is only ever touched by one thread at a time

    public readonly List<Scouter> scouters = new();
    public readonly CookieClickerManager cookieClickerManager = new();

    public void Start()
    {
        // Start code
    }
    public void Update(double deltaTime)
    {
        // Update code
    }
    public void Stop()
    {
        // Stop code
    }
}
