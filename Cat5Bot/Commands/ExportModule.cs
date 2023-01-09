namespace Cat5Bot.Commands;

// #pragma warning disable CA1822 // Mark members as static
// #pragma warning disable CS1998 // Async method lacks 'await' operators and will run synchronously

[Group("export")]
public class ExportModule : BaseCommandModule
{
    // Dependencies
#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
    public LiteDatabase Db { private get; set; }
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.

    #region GroupCommand
    [GroupCommand, RequireGuild, RequireRoles(RoleCheckMode.Any, "Admin", "Mentors", "Leaders")]
    public async Task Command(CommandContext ctx)
    {
        var events = Db.GetCollection<EventData>("events");
        events.EnsureIndex(x => x.StartTime);

        var people = Db.GetCollection<PersonData>("people");
        people.EnsureIndex(x => x.Name);

        var eventsOrdered = events.Query().OrderBy(x => x.StartTime).ToList();
        var peopleOrdered = people.Query().OrderBy(x => x.Name).ToList();

        StringBuilder sb = new();

        sb.AppendLine("," + string.Join(',', eventsOrdered.Select(x => $"{x.StartTime.Date:M/d/yy}")) + ",");
        sb.AppendLine("," + string.Join(',', eventsOrdered.Select(x => $"{x.Title}")) + ",");
        foreach (var person in peopleOrdered)
        {
            sb.Append($"{person.Name},");
            if (person.Record is null)
            {
                for (int i = 0; i < eventsOrdered.Count; i++)
                {
                    sb.Append(',');
                }
                sb.AppendLine();
                continue;
            }

            foreach (var @event in eventsOrdered)
            {
                if (person.Record.Contains(@event.Id))
                {
                    sb.Append('P');
                }
                sb.Append(',');
            }
            sb.AppendLine();
        }

        using MemoryStream export = new();
        await export.WriteAsync(Encoding.UTF8.GetBytes(sb.ToString()));
        export.Position = 0;

        string fileName = $"Attendance_Record_{DateTime.Now.ToString("d").Replace('/', '_')}.csv";

        await ctx.Member!.SendMessageAsync(new DiscordMessageBuilder()
            .AddEmbed(new DiscordEmbedBuilder()
                .WithColor(DiscordColor.Green)
                .WithTitle("Attendance Record")
                .WithFooter(Category5Bot.ValidAsOfNowText)
            )
            .AddFile(fileName, export)
        );

        await ctx.RespondAsync(new DiscordEmbedBuilder()
            .WithColor(DiscordColor.Green)
            .WithAuthor(Category5Bot.InitiatorText(ctx))
            .WithTitle("Attendance Record")
            .WithDescription("The attendance record has been direct messaged to you")
            .WithFooter(Category5Bot.ValidAsOfNowText)
        );
    }
    #endregion GroupCommand
}