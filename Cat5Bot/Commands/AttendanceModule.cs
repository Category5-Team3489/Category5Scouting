namespace Cat5Bot.Commands;

// #pragma warning disable CA1822 // Mark members as static
// #pragma warning disable CS1998 // Async method lacks 'await' operators and will run synchronously

[Group("attend"), Aliases("a")]
public class AttendanceModule : BaseCommandModule
{
    // Dependencies
#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
    public LiteDatabase Db { private get; set; }
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.

    // TODO Use select menu for attending previous events, !attend -> buttons: (this event, other event), choose
    // ^^^^^ Give 20 or max selection amt of closest events, both future and past, present in middle
    // TODO Say name of person attending event in title Ex: Jerry Attending Event
    // TODO Use another role or something to let someone mark attendance for another person

    #region GroupCommand
    [GroupCommand, RequireGuild]
    public async Task Command(CommandContext ctx)
    {

    }
    [GroupCommand, RequireGuild, RequireRoles(RoleCheckMode.Any, "Admin", "Mentors", "Leaders")]
    public async Task Command(CommandContext ctx, ulong discordId)
    {

    }
    [GroupCommand, RequireGuild, RequireRoles(RoleCheckMode.Any, "Admin", "Mentors", "Leaders")]
    public async Task Command(CommandContext ctx, ulong discordId, [RemainingText] string name)
    {
        Console.WriteLine("[Cat5Bot] !attend");

        // TODO Empty string for name means give error if discord id collides or isn't found


    }
    [GroupCommand, RequireGuild, RequireRoles(RoleCheckMode.Any, "Admin", "Mentors", "Leaders")]
    public async Task Command(CommandContext ctx, [RemainingText] string name)
    {
        // Error if name not found or duplicates of provided name exist
    }
    [GroupCommand, RequireGuild]
    public async Task Command(CommandContext ctx)
    {
        Console.WriteLine("[Cat5Bot] !attend");

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
    #endregion GroupCommand
}