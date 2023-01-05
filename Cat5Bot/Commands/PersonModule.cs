using System;
using System.Drawing;

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

    [GroupCommand, RequireGuild]
    public async Task Command(CommandContext ctx)
    {
        await Command(ctx, ctx.Member!.DisplayName);
    }

    [GroupCommand, RequireGuild]
    public async Task Command(CommandContext ctx, DiscordMember member)
    {
        await Command(ctx, member, member.DisplayName);
    }

    [GroupCommand, RequireGuild]
    public async Task Command(CommandContext ctx, DiscordMember member, [RemainingText] string name)
    {
        var people = Db.GetCollection<PersonData>("people");

        people.EnsureIndex(x => x.DiscordId);
        var person = people.FindOne(x => x.DiscordId == member.Id);

        string title;
        DiscordColor color;
        if (person is null)
        {
            title = "Created Person";
            color = DiscordColor.Green;
            person = new PersonData()
            {
                Name = name,
                DiscordId = member.Id
            };
        }
        else
        {
            title = "Updated Person";
            color = DiscordColor.Yellow;

            person.Name = name;
        }

        people.Upsert(person);

        var embed = person.Embed()
            .WithTitle(title)
            .WithColor(color);

        await ctx.RespondAsync(embed);
    }

    [GroupCommand, RequireGuild]
    public async Task Command(CommandContext ctx, [RemainingText] string name)
    {
        await Command(ctx, ctx.Member!, name);
    }

    //RequireRoles(RoleCheckMode.MatchIds, 
    [Command("list"), RequireGuild]
    public async Task ListCommand(CommandContext ctx)
    {
        var people = Db.GetCollection<PersonData>("people");
        people.EnsureIndex(x => x.Name);

        var pages = new List<Page>();
        var peopleOrdered = people.Query().OrderBy(x => x.Name).ToList();
        int number = 1;
        foreach (PersonData person in peopleOrdered)
        {
            pages.Add(new Page("", person.Embed()
                .WithColor(DiscordColor.Purple)
                .WithAuthor($"Initiator: {ctx.Member!.DisplayName}")
                .WithFooter(
                    $"\nPage {number}/{peopleOrdered.Count}\n" +
                    $"Timeout in {Category5Bot.InteractivityTimeout.TotalMinutes} minutes"))
                );
            number++;
        }

        await ctx.Channel.SendPaginatedMessageAsync(ctx.Member, pages,
            PaginationBehaviour.WrapAround,
            ButtonPaginationBehavior.DeleteButtons
        );
    }
}