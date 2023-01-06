using System.Xml.Linq;

namespace Cat5Bot.Commands;

// #pragma warning disable CA1822 // Mark members as static
// #pragma warning disable CS1998 // Async method lacks 'await' operators and will run synchronously

[Group("person"), Aliases("p")]
public class PersonModule : BaseCommandModule
{
    // Dependencies
#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
    public LiteDatabase Db { private get; set; }
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.

    #region GroupCommand
    [GroupCommand, RequireGuild]
    public async Task Command(CommandContext ctx)
    {
        await Command(ctx, ctx.Member!.DisplayName);
    }
    [GroupCommand, RequireGuild, RequireRoles(RoleCheckMode.Any, "Admin", "Mentors", "Leaders")]
    public async Task Command(CommandContext ctx, DiscordMember member)
    {
        await Command(ctx, member, member.DisplayName);
    }
    [GroupCommand, RequireGuild, RequireRoles(RoleCheckMode.Any, "Admin", "Mentors", "Leaders")]
    public async Task Command(CommandContext ctx, DiscordMember member, [RemainingText] string name)
    {
        Console.WriteLine("[Cat5Bot] !person");

        if (name.Length < 1 || name.Length > 32)
        {
            await ctx.RespondAsync(new DiscordEmbedBuilder()
                .WithColor(DiscordColor.Red)
                .WithAuthor($"Initiator: {ctx.Member!.DisplayName}")
                .WithTitle("Error")
                .WithDescription("Name length must be between 1 and 32 characters")
            );
            return;
        }

        var people = Db.GetCollection<PersonData>("people");

        people.EnsureIndex(x => x.DiscordId);
        var person = people.FindOne(x => x.DiscordId == member.Id);

        string title;
        if (person is null)
        {
            title = "Created Person";
            person = new PersonData()
            {
                Name = name,
                DiscordId = member.Id
            };
        }
        else
        {
            title = "Updated Person";
            person.Name = name;
        }

        people.Upsert(person);

        await ctx.RespondAsync(person.Embed()
            .WithColor(DiscordColor.Green)
            .WithAuthor($"Initiator: {ctx.Member!.DisplayName}")
            .WithTitle(title)
        );
    }
    [GroupCommand, RequireGuild]
    public async Task Command(CommandContext ctx, [RemainingText] string name)
    {
        await Command(ctx, ctx.Member!, name);
    }
    #endregion GroupCommand

    [Command("list"), RequireGuild, RequireRoles(RoleCheckMode.Any, "Admin", "Mentors", "Leaders")]
    public async Task ListCommand(CommandContext ctx)
    {
        Console.WriteLine("[Cat5Bot] !person list");

        var people = Db.GetCollection<PersonData>("people");
        people.EnsureIndex(x => x.Name);

        var peopleOrdered = people.Query().OrderBy(x => x.Name).ToList();

        if (peopleOrdered.Count < 1)
        {
            await ctx.RespondAsync(new DiscordEmbedBuilder()
                .WithColor(DiscordColor.Red)
                .WithAuthor($"Initiator: {ctx.Member!.DisplayName}")
                .WithTitle("Error")
                .WithDescription("No people in database")
            );
            return;
        }

        var pages = new List<Page>();
        int number = 1;
        foreach (PersonData person in peopleOrdered)
        {
            pages.Add(new Page("",
                person.Embed()
                    .WithColor(DiscordColor.Green)
                    .WithAuthor($"Initiator: {ctx.Member!.DisplayName}")
                    .WithTitle("People")
                    .WithFooter(
                        $"Page {number}/{peopleOrdered.Count}\n" +
                        $"Valid as of {DateTime.Now}\n" +
                        Category5Bot.InteractivityTimeoutText
                    )
                )
            );
            number++;
        }

        await ctx.Channel.SendPaginatedMessageAsync(ctx.User, pages,
            PaginationBehaviour.WrapAround,
            ButtonPaginationBehavior.DeleteButtons
        );
    }
}