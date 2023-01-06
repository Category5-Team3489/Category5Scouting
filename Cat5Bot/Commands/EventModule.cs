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

    // TODO ADD PERMS
    [GroupCommand]
    public async Task Command(CommandContext ctx)
    {
        var msg = await new DiscordMessageBuilder()
            .WithEmbed(new DiscordEmbedBuilder()
                .WithTitle($"Please select an action {ctx.Member!.DisplayName}")
                .WithColor(DiscordColor.Yellow)
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
            await ctx.RespondAsync("Timeout");
            return;
        }

        string title = modal.Result.Values["event_create_modal_title"];
        string info = modal.Result.Values["event_create_modal_info"];
        string date = modal.Result.Values["event_create_modal_date"];
        string startTime = modal.Result.Values["event_create_modal_start_time"];
        string endTime = modal.Result.Values["event_create_modal_end_time"];

        if (info == "")
        {
            info = "No info provided.";
        }

        if (!DateOnly.TryParse(date, out DateOnly dateParsed))
        {
            await ctx.RespondAsync("Date invalid");
            return;
        }

        if (!TimeOnly.TryParse(startTime, out TimeOnly startTimeParsed))
        {
            await ctx.RespondAsync("Start Time invalid");
            return;
        }

        if (!TimeOnly.TryParse(endTime, out TimeOnly endTimeParsed))
        {
            await ctx.RespondAsync("End Time invalid");
            return;
        }

        var events = Db.GetCollection<EventData>("events");

        DateTime startTimeData = new(dateParsed.Year, dateParsed.Month, dateParsed.Day, startTimeParsed.Hour, startTimeParsed.Minute, 0);
        DateTime endTimeData = new(dateParsed.Year, dateParsed.Month, dateParsed.Day, endTimeParsed.Hour, endTimeParsed.Minute, 0);

        var @event = new EventData()
        {
            Title = title,
            Info = info,
            StartTime = startTimeData,
            EndTime = endTimeData
        };

        events.Insert(@event);

        var embed = @event.Embed()
            .WithColor(DiscordColor.Green)
            .WithTitle("Created Event");

        await modal.Result.Interaction.CreateResponseAsync(
            InteractionResponseType.ChannelMessageWithSource,
            new DiscordInteractionResponseBuilder()
                .AddEmbed(embed)
        );
    }
    private async Task Update(CommandContext ctx, DiscordMessage msg, InteractivityExtension interactivity, ComponentInteractionCreateEventArgs result)
    {
        await result.Interaction.CreateResponseAsync(
            InteractionResponseType.ChannelMessageWithSource,
            new DiscordInteractionResponseBuilder()
                .WithContent("Coming soon to a discord server near you!")
        );
    }
    private async Task Delete(CommandContext ctx, DiscordMessage msg, InteractivityExtension interactivity, ComponentInteractionCreateEventArgs result)
    {
        await result.Interaction.CreateResponseAsync(
            InteractionResponseType.ChannelMessageWithSource,
            new DiscordInteractionResponseBuilder()
                .AddEmbed(new DiscordEmbedBuilder()
                    .WithColor(DiscordColor.Purple)
                    .WithAuthor($"Initiator: {ctx.Member!.DisplayName}")
                    .WithTitle("Enter event Id of event to be deleted")
                    .WithDescription("List events to get their Ids")
                )
        );

        var delete = await interactivity.WaitForMessageAsync(
            (msg) =>
            {
                if (msg.Author.Id != ctx.User.Id || msg.ChannelId != ctx.Channel.Id)
                {
                    return false;
                }

                if (int.TryParse(msg.Content, out _))
                {
                    return true;
                }
                return false;
            }
        );

        if (delete.TimedOut)
        {
            await ctx.RespondAsync("Timeout");
            return;
        }

        var events = Db.GetCollection<EventData>("events");
        events.EnsureIndex(x => x.Id);

        int eventId = int.Parse(delete.Result.Content);
        bool wasDeleted = events.Delete(eventId);

        var embed = wasDeleted ?
            new DiscordEmbedBuilder()
                .WithTitle($"Event with Id of {eventId} deleted")
                .WithColor(DiscordColor.Green)
            :
            new DiscordEmbedBuilder()
                .WithTitle($"Event with Id of {eventId} not found")
                .WithColor(DiscordColor.Red);

        if (wasDeleted)
        {
            int attendantsDeleted = 0;
            var people = Db.GetCollection<PersonData>("people");
            foreach (var person in people.Query().ForUpdate().ToEnumerable())
            {
                if (person.Record is not null)
                {
                    attendantsDeleted += person.Record.RemoveAll(x => x == eventId);
                }
            }
            embed.AddField("Attendants Deleted", attendantsDeleted.ToString());
        }

        await delete.Result.RespondAsync(embed);
    }
    private async Task List(CommandContext ctx, DiscordMessage msg, InteractivityExtension interactivity, ComponentInteractionCreateEventArgs result)
    {
        var events = Db.GetCollection<EventData>("events");
        events.EnsureIndex(x => x.StartTime);

        var pages = new List<Page>();
        var eventsOrdered = events.Query().OrderByDescending(x => x.StartTime).ToList();
        int number = 1;
        foreach (EventData @event in eventsOrdered)
        {
            pages.Add(new Page("", @event.Embed()
                .WithColor(DiscordColor.Purple)
                .WithAuthor($"Initiator: {ctx.Member!.DisplayName}")
                .WithFooter(
                    $"\nPage {number}/{eventsOrdered.Count}\n" +
                    $"Timeout in {Category5Bot.InteractivityTimeout.TotalMinutes} minutes"))
                );
            number++;
        }

        await result.Interaction.SendPaginatedResponseAsync(false, ctx.User, pages, null,
            PaginationBehaviour.WrapAround,
            ButtonPaginationBehavior.DeleteButtons
        );
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