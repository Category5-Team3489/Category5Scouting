namespace Cat5Bot;

public sealed class Category5Bot
{
    public static async Task MainAsync(string token, LiteDatabase db)
    {
        var discord = new DiscordClient(new DiscordConfiguration()
        {
            Token = token,
            TokenType = TokenType.Bot,
            Intents = DiscordIntents.AllUnprivileged
        });

        var services = new ServiceCollection()
            .AddSingleton<Random>()
            .AddSingleton(db)
            .BuildServiceProvider();

        var commands = discord.UseCommandsNext(new CommandsNextConfiguration()
        {
            StringPrefixes = new[] { "!" },
            Services = services
        });

        discord.UseInteractivity(new InteractivityConfiguration()
        {
            // PollBehaviour = PollBehaviour.KeepEmojis,
            // Timeout = TimeSpan.FromSeconds(30)
        });

        commands.RegisterCommands<GeneralModule>();

        await discord.ConnectAsync();
    }
}