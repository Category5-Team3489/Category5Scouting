namespace Cat5Bot.Commands;

// #pragma warning disable CA1822 // Mark members as static
// #pragma warning disable CS1998 // Async method lacks 'await' operators and will run synchronously

public class AttendanceModule : BaseCommandModule
{
    // Dependencies
#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
    public LiteDatabase Db { private get; set; }
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.

    /*
    [Command("example")]
    public async Task ExampleCommand(CommandContext ctx)
    {
        await ctx.RespondAsync("Example!");
    }
    */

    // TODO require perms
    [Command("list"), RequireGuild]
    public async Task ListCommand(CommandContext ctx, DiscordMember member)
    {
        await ctx.RespondAsync("Example!");
    }
}