using DSharpPlus.CommandsNext;

namespace Cat5Bot;

public class GeneralModule : BaseCommandModule
{
    public Random Rng { private get; set; }
    public LiteDatabase Db { private get; set; }

    [Command("example"), Aliases("bar", "baz")]
    [RequireGuild, RequireBotPermissions(Permissions.AttachFiles)]
    public async Task ExampleCommand(CommandContext ctx)
    {
        await ctx.RespondAsync("Example command executed!");
    }

    [Command("pagination")]
    public async Task PaginationCommand(CommandContext ctx)
    {
        var reallyLongString = "Lorem ipsum dolor sit amet, consectetur adipiscing ..."

        var interactivity = ctx.Client.GetInteractivity();
        var pages = interactivity.GeneratePagesInEmbed(reallyLongString);

        await ctx.Channel.SendPaginatedMessageAsync(ctx.Member, pages);
    }
}