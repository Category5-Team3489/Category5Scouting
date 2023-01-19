using Cat5Bot.Commands;
using System;

namespace Cat5Bot;

public class Category5Bot
{
    public static readonly TimeSpan InteractivityTimeout = TimeSpan.FromMinutes(5);
    public static readonly string InteractivityTimeoutText = $"Timeout in {InteractivityTimeout.TotalMinutes} minutes";
    public static string ValidAsOfNowText => $"Valid as of {DateTime.Now}";
    public static string InitiatorText(CommandContext ctx) => $"Initiator: {ctx.Member!.DisplayName}";

    // TODO Template events, "Weekday Meeting, Saturday Meeting????"

    public static async Task MainAsync(string token, LiteDatabase db)
    {
        var discord = new DiscordClient(new DiscordConfiguration()
        {
            Token = token,
            TokenType = TokenType.Bot,
            Intents = DiscordIntents.All,
            // MinimumLogLevel = LogLevel.Trace
        });

        var services = new ServiceCollection()
            .AddSingleton(db)
            .BuildServiceProvider();

        var commands = discord.UseCommandsNext(new CommandsNextConfiguration()
        {
            StringPrefixes = new[] { "!" },
            Services = services
        });

        discord.UseInteractivity(new InteractivityConfiguration()
        {
            Timeout = InteractivityTimeout,
            AckPaginationButtons = true
        });

        discord.MessageCreated += async (s, e) =>
        {
            if (e.Channel.IsPrivate)
            {
                return;
            }

            if (e.Message.Content.Trim().ToLower() != "!a")
            {
                return;
            }

            ulong discordId = e.Author.Id;
            var member = await e.Guild.GetMemberAsync(discordId);
            string name = member.DisplayName;

            var events = db.GetCollection<EventData>("events");
            events.EnsureIndex(x => x.StartTime);

            DateTime now = DateTime.Now;
            var closestEvent = events.FindAll()
                .OrderBy(x => Math.Abs((x.StartTime - now).TotalMilliseconds))
                .First();

            if (closestEvent is null)
            {
                // TODO doesnt resp
                await e.Message.RespondAsync(new DiscordEmbedBuilder()
                    .WithColor(DiscordColor.Red)
                    .WithAuthor($"Initiator: {member!.DisplayName}")
                    .WithTitle("Error")
                    .WithDescription("No attendable events in database")
                );
                return;
            }

            var people = db.GetCollection<PersonData>("people");
            people.EnsureIndex(x => x.DiscordId);

            var person = people.FindOne(x => x.DiscordId == discordId);
            if (person is null)
            {
                person = new PersonData(name, discordId);
                people.Insert(person);
            }

            person.Add(closestEvent.Id);
            people.Update(person);

            await e.Message.RespondAsync(closestEvent.Embed()
                .WithColor(DiscordColor.Green)
                .WithAuthor($"Initiator: {member.DisplayName}")
                .WithTitle($"{person.Name} Attending Event")
            );
        };

        commands.RegisterCommands<AttendanceModule>();
        commands.RegisterCommands<EventModule>();
        commands.RegisterCommands<ExportModule>();
        commands.RegisterCommands<PersonModule>();

        await discord.ConnectAsync();
    }
}