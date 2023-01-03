

namespace Cat5Bot;

public sealed class Category5Bot
{
    public static async Task MainAsync(string token)
    {
        var discord = new DiscordClient(new DiscordConfiguration()
        {
            Token = token,
            TokenType = TokenType.Bot,
            Intents = DiscordIntents.AllUnprivileged
        });

        await discord.ConnectAsync();
    }
}