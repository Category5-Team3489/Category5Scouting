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

    /*
    [Command("example")]
    public async Task ExampleCommand(CommandContext ctx)
    {
        await ctx.RespondAsync("Example!");
    }
    */

    // TODO require perms
    [GroupCommand, RequireGuild]
    public async Task Command(CommandContext ctx)
    {
        try
        {
            //await ctx.RespondAsync("Example!");

            var events = Db.GetCollection<EventData>("events");
            events.EnsureIndex(x => x.StartTime);

            DateTime now = DateTime.Now;
            // TODO ERROR
            var closestEvent = events.Query().OrderBy(x => Math.Abs((x.StartTime - now).TotalMilliseconds)).First();

            var people = Db.GetCollection<PersonData>("people");
            people.EnsureIndex(x => x.DiscordId);

            var person = people.FindOne(x => x.DiscordId == ctx.Member!.Id);

            if (closestEvent is null)
            {
                // TODO imrpove
                await ctx.RespondAsync("No attendable events");
                return;
            }

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
        catch (Exception e)
        {
            Console.WriteLine(e.ToString());
        }
    }
}