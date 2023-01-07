using Cat5Bot.Commands;

namespace Cat5Bot;

public sealed class Category5Bot
{
    public static readonly TimeSpan InteractivityTimeout = TimeSpan.FromMinutes(5);
    public static readonly string InteractivityTimeoutText = $"Timeout in {InteractivityTimeout.TotalMinutes} minutes";
    public static string ValidAsOfNow => $"Valid as of {DateTime.Now}";

    public static async Task MainAsync(string token, LiteDatabase db)
    {
        var discord = new DiscordClient(new DiscordConfiguration()
        {
            Token = token,
            TokenType = TokenType.Bot,
            Intents = DiscordIntents.All,
            // MinimumLogLevel = LogLevel.Trace
        });

        var services = new ServiceCollection()
            .AddSingleton(db)
            .BuildServiceProvider();

        var commands = discord.UseCommandsNext(new CommandsNextConfiguration()
        {
            StringPrefixes = new[] { "!" },
            Services = services
        });

        discord.UseInteractivity(new InteractivityConfiguration()
        {
            Timeout = InteractivityTimeout,
            AckPaginationButtons = true
        });

        commands.RegisterCommands<AttendanceModule>();
        commands.RegisterCommands<EventModule>();
        commands.RegisterCommands<ExportModule>();
        commands.RegisterCommands<PersonModule>();

        await discord.ConnectAsync();
    }
}