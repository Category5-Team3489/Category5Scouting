using Microsoft.Extensions.Logging;

namespace Cat5Bot.Commands;

#pragma warning disable CA1822 // Mark members as static
#pragma warning disable CS1998 // Async method lacks 'await' operators and will run synchronously

[Group("attend")]
public class AttendanceModule : BaseCommandModule
{
    // Dependencies
#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
    public LiteDatabase Db { private get; set; }
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.

    // TODO Use select menu for attending previous events, !attend -> buttons: (this event, other event, remove attendance), choose
    // ^^^^^ Give 20 or max selection amt of closest events, both future and past, present in middle
    // TODO Say name of person attending event in title Ex: Jerry Attending Event
    // TODO Use another role or something to let someone mark attendance for another person
    // TODO !attend list, or through button

    #region GroupCommand
    [GroupCommand, RequireGuild]
    public async Task Command(CommandContext ctx)
    {
        await Command(ctx, ctx.Member!);
    }
    [GroupCommand, RequireGuild, RequireRoles(RoleCheckMode.Any, "Admin", "Mentors", "Leaders")]
    public async Task Command(CommandContext ctx, DiscordMember member)
    {
        await Command(ctx, member.Id, member.DisplayName);
    }
    [GroupCommand, RequireGuild, RequireRoles(RoleCheckMode.Any, "Admin", "Mentors", "Leaders")]
    public async Task Command(CommandContext ctx, ulong discordId)
    {
        await Command(ctx, discordId, "");
    }
    [GroupCommand, RequireGuild, RequireRoles(RoleCheckMode.Any, "Admin", "Mentors", "Leaders")]
    public async Task Command(CommandContext ctx, ulong discordId, [RemainingText] string name)
    {
        if (name.Length < 1 || name.Length > 32)
        {
            await ctx.RespondAsync(new DiscordEmbedBuilder()
                .WithColor(DiscordColor.Red)
                .WithAuthor(Category5Bot.InitiatorText(ctx))
                .WithTitle("Error")
                .WithDescription("Name length must be between 1 and 32 characters")
            );
            return;
        }

        var events = Db.GetCollection<EventData>("events");
        events.EnsureIndex(x => x.StartTime);

        DateTime now = DateTime.Now;
        var closestEvent = events.FindAll()
            .OrderBy(x => Math.Abs((x.StartTime - now).TotalMilliseconds))
            .First();

        if (closestEvent is null)
        {
            // TODO doesnt resp
            await ctx.RespondAsync(new DiscordEmbedBuilder()
                .WithColor(DiscordColor.Red)
                .WithAuthor($"Initiator: {ctx.Member!.DisplayName}")
                .WithTitle("Error")
                .WithDescription("No attendable events in database")
            );
            return;
        }

        // TODO Empty string for name means give error if discord id collides or isn't found

        bool wasNameProvided = name != "";

        var people = Db.GetCollection<PersonData>("people");
        people.EnsureIndex(x => x.DiscordId);

        var person = people.FindOne(x => x.DiscordId == discordId);
        if (person is null)
        {
            if (wasNameProvided)
            {
                person = new PersonData(name, discordId);
                people.Insert(person);
            }
            else
            {
                await ctx.RespondAsync(new DiscordEmbedBuilder()
                    .WithColor(DiscordColor.Red)
                    .WithAuthor(Category5Bot.InitiatorText(ctx))
                    .WithTitle("Error")
                    .WithDescription("No name provided and discord Id is not in database")
                );
                return;
            }
        }
        else
        {
            // Valid
        }

        var msg = await new DiscordMessageBuilder()
            .WithEmbed(closestEvent.Embed()
                .WithColor(DiscordColor.Yellow)
                .WithAuthor(Category5Bot.InitiatorText(ctx))
                .WithTitle($"Select an action")
                .WithFooter(Category5Bot.InteractivityTimeoutText)
            )
            .AddComponents(new DiscordComponent[]
            {
                new DiscordButtonComponent(ButtonStyle.Success, "attend_this", "Attend This Event"),
                new DiscordButtonComponent(ButtonStyle.Primary, "attend_recent", "Attend Recent Event"),
                new DiscordButtonComponent(ButtonStyle.Danger, "attend_unattend", "Unattend Recent Event"),
                new DiscordButtonComponent(ButtonStyle.Secondary, "attend_list", "List Attendance")
            })
            .WithReply(ctx.Message.Id, true)
            .SendAsync(ctx.Channel);

        var interactivity = ctx.Client.GetInteractivity();

        var result = await interactivity.WaitForButtonAsync(msg, ctx.User);
        if (result.TimedOut)
        {
            await ctx.RespondAsync(new DiscordEmbedBuilder()
                .WithColor(DiscordColor.Red)
                .WithAuthor(Category5Bot.InitiatorText(ctx))
                .WithTitle("Timeout")
            );
        }
        else
        {
            switch (result.Result.Id)
            {
                case "attend_this":
                    await This(ctx, msg, interactivity, result.Result, person, closestEvent, people);
                    break;
                case "attend_recent":
                    await result.Result.Interaction.CreateResponseAsync(
                        InteractionResponseType.ChannelMessageWithSource,
                        new DiscordInteractionResponseBuilder()
                            .AddEmbed(new DiscordEmbedBuilder()
                                .WithColor(DiscordColor.Yellow)
                                .WithAuthor(Category5Bot.InitiatorText(ctx))
                                .WithTitle("Coming soon to a discord server near you!")
                            )
                    );
                    break;
                case "attend_unattend":
                    await result.Result.Interaction.CreateResponseAsync(
                        InteractionResponseType.ChannelMessageWithSource,
                        new DiscordInteractionResponseBuilder()
                            .AddEmbed(new DiscordEmbedBuilder()
                                .WithColor(DiscordColor.Yellow)
                                .WithAuthor(Category5Bot.InitiatorText(ctx))
                                .WithTitle("Coming soon to a discord server near you!")
                            )
                    );
                    break;
                case "attend_list":
                    await result.Result.Interaction.CreateResponseAsync(
                        InteractionResponseType.ChannelMessageWithSource,
                        new DiscordInteractionResponseBuilder()
                            .AddEmbed(new DiscordEmbedBuilder()
                                .WithColor(DiscordColor.Yellow)
                                .WithAuthor(Category5Bot.InitiatorText(ctx))
                                .WithTitle("Coming soon to a discord server near you!")
                            )
                    );
                    break;
            }
        }

        await msg.DeleteAsync();
    }
    [GroupCommand, RequireGuild, RequireRoles(RoleCheckMode.Any, "Admin", "Mentors", "Leaders")]
    public async Task Command(CommandContext ctx, [RemainingText] string name)
    {
        if (name.Length < 1 || name.Length > 32)
        {
            await ctx.RespondAsync(new DiscordEmbedBuilder()
                .WithColor(DiscordColor.Red)
                .WithAuthor(Category5Bot.InitiatorText(ctx))
                .WithTitle("Error")
                .WithDescription("Name length must be between 1 and 32 characters")
            );
            return;
        }

        // Error if name not found or duplicates of provided name exist
        var people = Db.GetCollection<PersonData>("people");
        people.EnsureIndex(x => x.Name);

        var peopleWithName = people.Find(x => x.Name == name);
        int occurrences = peopleWithName.Count();
        if (occurrences == 1)
        {
            ulong discordId = peopleWithName.First().DiscordId;
            await Command(ctx, discordId);
        }
        else if (occurrences == 0)
        {
            await ctx.RespondAsync(new DiscordEmbedBuilder()
                .WithColor(DiscordColor.Red)
                .WithAuthor(Category5Bot.InitiatorText(ctx))
                .WithTitle("Error")
                .WithDescription("Name not found in database")
            );
        }
        else
        {
            await ctx.RespondAsync(new DiscordEmbedBuilder()
                .WithColor(DiscordColor.Red)
                .WithAuthor(Category5Bot.InitiatorText(ctx))
                .WithTitle("Error")
                .WithDescription("Name contains duplicates in database")
            );
        }
    }

#pragma warning disable IDE0060 // Remove unused parameter
    private async Task This(CommandContext ctx, DiscordMessage msg, InteractivityExtension interactivity, ComponentInteractionCreateEventArgs result, PersonData person, EventData closestEvent, ILiteCollection<PersonData> people)
    {
        person.Add(closestEvent.Id);
        people.Update(person);

        await result.Interaction.CreateResponseAsync(
            InteractionResponseType.ChannelMessageWithSource,
            new DiscordInteractionResponseBuilder()
                .AddEmbed(closestEvent.Embed()
                    .WithColor(DiscordColor.Green)
                    .WithAuthor(Category5Bot.InitiatorText(ctx))
                    .WithTitle($"{person.Name} Attending Event")
                )
        );
    }
#pragma warning restore IDE0060 // Remove unused parameter
    /*
    [GroupCommand, RequireGuild]
    public async Task Command(CommandContext ctx)
    {
        var events = Db.GetCollection<EventData>("events");
        events.EnsureIndex(x => x.StartTime);
        events.EnsureIndex(x => x.Id);

        DateTime now = DateTime.Now;
        var closestEvent = events.FindAll()
            .OrderBy(x => Math.Abs((x.StartTime - now).TotalMilliseconds))
            .First();

        if (closestEvent is null)
        {
            await ctx.RespondAsync(new DiscordEmbedBuilder()
                .WithColor(DiscordColor.Red)
                .WithAuthor($"Initiator: {ctx.Member!.DisplayName}")
                .WithTitle("Error")
                .WithDescription("No attendable events in database")
            );
            return;
        }

        var people = Db.GetCollection<PersonData>("people");
        people.EnsureIndex(x => x.DiscordId);

        var person = people.FindOne(x => x.DiscordId == ctx.Member!.Id);

        // TODO say if new person was created?
        if (person is null)
        {
            person = new PersonData
            {
                Name = ctx.Member!.DisplayName,
                DiscordId = ctx.Member.Id,
                Record = new List<int>() { closestEvent.Id }
            };
        }
        else
        {
            if (person.Record is null)
            {
                person.Record = new List<int>() { closestEvent.Id };
            }
            else
            {
                if (!person.Record.Contains(closestEvent.Id))
                {
                    person.Record.Add(closestEvent.Id);
                }
                else
                {
                    // TODO imrpove
                    await ctx.RespondAsync("Already attending this event");
                    return;
                }
            }
            // TODO check not already attending and say
        }

        people.Upsert(person);

        var embed = closestEvent.Embed()
            .WithTitle("Attending Event")
            .WithColor(DiscordColor.Green);

        await ctx.RespondAsync(embed);
    }
    */
    #endregion GroupCommand
}