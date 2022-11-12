namespace Category5Scouting;

public class CookieClickerManager
{
    // id, user
    private Dictionary<string, User> users = new();

    public ulong Click(string id, string name)
    {
        if (users.TryGetValue(id, out User? user))
        {
            user.Click();
            return user.Cookies;
        }
        else
        {
            user = new(id, name);
            users.Add(id, user);
            user.Click();
            return user.Cookies;
        }
    }

    public ulong GetCookies(string id)
    {
        if (users.TryGetValue(id, out User? user))
        {
            return user.Cookies;
        }
        else
        {
            return 0;
        }
    }

    public List<User> GetLeaderboard()
    {
        return users.Values.OrderByDescending(user => user.Cookies).Take(16).ToList();
    }

    public record User(string Id, string Name)
    {
        public ulong Cookies { get; private set; } = 0;

        public void Click()
        {
            Cookies++;
        }
    }
}