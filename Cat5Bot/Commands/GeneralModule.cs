using Cat5Bot.Data;
using DSharpPlus.Interactivity.Enums;
using System.Text;

namespace Cat5Bot;

#pragma warning disable CA1822 // Mark members as static

public class GeneralModule : BaseCommandModule
{
    // Dependencies
#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
    public LiteDatabase Db { private get; set; }
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.

    [Command("example")]
    public async Task ExampleCommand(CommandContext ctx)
    {
        await ctx.RespondAsync("Example!");
    }

    [Command("event")]
    public async Task EventCommand(CommandContext ctx, string title, string info)
    {
        var events = Db.GetCollection<EventData>("events");

        var @event = new EventData()
        {
            Title = title,
            Info = info,
            StartTime = DateTime.Now.AddDays(1),
            EndTime = DateTime.Now.AddDays(1).AddHours(3),
        };

        events.Upsert(@event);

        events.EnsureIndex(x => x.StartTime);

        StringBuilder response = new();
        DateTime now = DateTime.Now;
        foreach (var e in events.Query().Where(x => x.StartTime > now).OrderBy(x => x.StartTime).ToEnumerable())
        {
            string eventResponse =
                $"Title: {e.Title}\n" +
                $"\tInfo: {e.Info}\n" +
                $"\tStart Time: {e.StartTime}\n" +
                $"\tEnd Time: {e.EndTime}\n" +
                $"\tId: {e.Id}\n";
            response.AppendLine(eventResponse);
        }

        var embedBuilder = new DiscordEmbedBuilder();
        embedBuilder.WithTitle("Future events:");

        var interactivity = ctx.Client.GetInteractivity();
        var pages = interactivity.GeneratePagesInEmbed(response.ToString(), SplitType.Line, embedBuilder);

        await ctx.Channel.SendPaginatedMessageAsync(ctx.Member, pages);
    }

    [Command("modal")]
    public async Task ModalCommand(CommandContext ctx)
    {
        var msg = new DiscordMessageBuilder()
            .WithContent("This message has buttons! Pretty neat innit?")
            .AddComponents(new DiscordComponent[]
            {
                new DiscordButtonComponent(ButtonStyle.Primary, "1_top", "Blurple!"),
                new DiscordButtonComponent(ButtonStyle.Secondary, "2_top", "Grey!"),
                new DiscordButtonComponent(ButtonStyle.Success, "3_top", "Green!"),
                new DiscordButtonComponent(ButtonStyle.Danger, "4_top", "Red!")
            })
            .WithReply(ctx.Message.Id, true)
            .SendAsync(ctx.Channel);

        ctx.Client.ComponentInteractionCreated += async (s, e) =>
        {
            /*
            await e.Interaction.CreateResponseAsync(
                InteractionResponseType.UpdateMessage,
                new DiscordInteractionResponseBuilder()
                    .WithContent("No more buttons for you >:)"));
            */
            await e.Interaction.CreateResponseAsync(
                InteractionResponseType.Modal,
                new DiscordInteractionResponseBuilder()
                    .AddComponents(new DiscordActionRowComponent(new DIscord));
        };
    }
}