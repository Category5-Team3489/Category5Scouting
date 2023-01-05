using System;
using System.Xml.Linq;

namespace Cat5Bot.Data;

#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.

public class EventData : IEmbeddable
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Info { get; set; }
    public DateTime StartTime { get; set; }
    public DateTime EndTime { get; set; }

    public DiscordEmbedBuilder Embed()
    {
        return new DiscordEmbedBuilder()
            .AddField(nameof(Title), Title.ToString(), false)
            .AddField(nameof(Id), Id.ToString(), false)
            .AddField(nameof(Info), Info.ToString(), false)
            .AddField(nameof(StartTime), StartTime.ToString(), false)
            .AddField(nameof(EndTime), EndTime.ToString(), false);
    }
}