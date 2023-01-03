namespace Cat5Bot;

public sealed class Category5Bot
{
    public static async Task MainAsync(string token, LiteDatabase db)
    {
        var discord = new DiscordClient(new DiscordConfiguration()
        {
            Token = token,
            TokenType = TokenType.Bot,
            Intents = DiscordIntents.All,
            // MinimumLogLevel = Microsoft.Extensions.Logging.LogLevel.Debug
        });

        var services = new ServiceCollection()
            .AddSingleton(db)
            .BuildServiceProvider();

        var commands = discord.UseCommandsNext(new CommandsNextConfiguration()
        {
            StringPrefixes = new[] { "!" },
            Services = services
        });

        discord.UseInteractivity();

        commands.RegisterCommands<GeneralModule>();

        await discord.ConnectAsync();
    }
}