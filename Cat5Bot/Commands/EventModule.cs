using DSharpPlus.EventArgs;

namespace Cat5Bot.Commands;

#pragma warning disable CA1822 // Mark members as static
#pragma warning disable CS1998 // Async method lacks 'await' operators and will run synchronously

[Group("event"), Aliases("e")]
public class EventModule : BaseCommandModule
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

    [GroupCommand]
    public async Task Command(CommandContext ctx)
    {
        var msg = await new DiscordMessageBuilder()
            .WithEmbed(new DiscordEmbedBuilder()
                .WithTitle($"Please select an action {ctx.Member!.DisplayName}")
                .WithFooter($"Timeout in {Category5Bot.InteractivityTimeout.TotalMinutes} minutes")
            )
            .AddComponents(new DiscordComponent[]
            {
                new DiscordButtonComponent(ButtonStyle.Success, "event_create", "Create"),
                new DiscordButtonComponent(ButtonStyle.Primary, "event_update", "Update"),
                new DiscordButtonComponent(ButtonStyle.Danger, "event_delete", "Delete"),
                new DiscordButtonComponent(ButtonStyle.Secondary, "event_list", "List")
            })
            .WithReply(ctx.Message.Id, true)
            .SendAsync(ctx.Channel);

        var interactivity = ctx.Client.GetInteractivity();

        var result = await interactivity.WaitForButtonAsync(msg, ctx.User);
        if (result.TimedOut)
        {
            await msg.DeleteAsync();
            await ctx.RespondAsync("Timeout");
            return;
        }

        string customId = result.Result.Id;
        switch (customId)
        {
            case "event_create":
                await Create(ctx, msg, interactivity, result.Result);
                return;
            case "event_update":
                await Update(ctx, msg, interactivity, result.Result);
                return;
            case "event_delete":
                await Delete(ctx, msg, interactivity, result.Result);
                return;
            case "event_list":
                await List(ctx, msg, interactivity, result.Result);
                return;
        }
    }

#pragma warning disable IDE0060 // Remove unused parameter
    private async Task Create(CommandContext ctx, DiscordMessage msg, InteractivityExtension interactivity, ComponentInteractionCreateEventArgs result)
    {
        await result.Interaction.CreateResponseAsync(
            InteractionResponseType.Modal,
            GetEventCreateModal()
        );

        var modal = await interactivity.WaitForModalAsync("event_create_modal", ctx.User);

        if (modal.TimedOut)
        {
            await msg.DeleteAsync();
            await ctx.RespondAsync("Timeout");
            return;
        }

        string title = modal.Result.Values["event_create_modal_title"];
        string info = modal.Result.Values["event_create_modal_info"];
        string date = modal.Result.Values["event_create_modal_date"];
        string startTime = modal.Result.Values["event_create_modal_start_time"];
        string endTime = modal.Result.Values["event_create_modal_end_time"];

        await modal.Result.Interaction.CreateResponseAsync(
            InteractionResponseType.ChannelMessageWithSource,
            new DiscordInteractionResponseBuilder()
                .WithContent($"{title}\n{info}\n{date}\n{startTime}\n{endTime}")
        );
    }
    private async Task Update(CommandContext ctx, DiscordMessage msg, InteractivityExtension interactivity, ComponentInteractionCreateEventArgs result)
    {
        await result.Interaction.CreateResponseAsync(
            InteractionResponseType.ChannelMessageWithSource,
            new DiscordInteractionResponseBuilder()
                .WithContent("Coming soon, to a discord server near you!")
        );
    }
    private async Task Delete(CommandContext ctx, DiscordMessage msg, InteractivityExtension interactivity, ComponentInteractionCreateEventArgs result)
    {

    }
    private async Task List(CommandContext ctx, DiscordMessage msg, InteractivityExtension interactivity, ComponentInteractionCreateEventArgs result)
    {

    }
#pragma warning restore IDE0060 // Remove unused parameter

    private DiscordInteractionResponseBuilder GetEventCreateModal()
    {
        return new DiscordInteractionResponseBuilder()
            .WithCustomId("event_create_modal")
            .WithTitle("New Event")
            .AddComponents(new TextInputComponent(
                    label: "Title",
                    customId: "event_create_modal_title",
                    placeholder: "Ex: \"Robotics Meeting\"",
                    required: true,
                    style: TextInputStyle.Short,
                    min_length: 0,
                    max_length: 70
            ))
            .AddComponents(new TextInputComponent(
                    label: "Info (Optional)",
                    customId: "event_create_modal_info",
                    placeholder: "Ex: \"BRING SAFETY GLASSES!!!\"",
                    required: false,
                    style: TextInputStyle.Paragraph,
                    min_length: 0,
                    max_length: 280
            ))
            .AddComponents(new TextInputComponent(
                    label: "Date (M/D/YYYY ONLY)",
                    customId: "event_create_modal_date",
                    placeholder: "Ex: \"12/25/2022\"",
                    required: true,
                    style: TextInputStyle.Short,
                    min_length: 8,
                    max_length: 10
            ))
            .AddComponents(new TextInputComponent(
                    label: "Start Time (X:XX am/pm ONLY)",
                    customId: "event_create_modal_start_time",
                    placeholder: "Ex: \"9:00am\"",
                    required: true,
                    style: TextInputStyle.Short,
                    min_length: 6,
                    max_length: 7
            ))
            .AddComponents(new TextInputComponent(
                    label: "End Time (X:XX am/pm ONLY)",
                    customId: "event_create_modal_end_time",
                    placeholder: "Ex: \"4:00pm\"",
                    required: true,
                    style: TextInputStyle.Short,
                    min_length: 6,
                    max_length: 7
            )
        );
    }
}