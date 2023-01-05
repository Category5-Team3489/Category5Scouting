namespace Cat5Bot.Data;

#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.

public class PersonData : IEmbeddable
{
    public int Id { get; set; }
    public string Name { get; set; }
    public ulong? DiscordId { get; set; }
    public List<int>? Record { get; set; }

    public DiscordEmbedBuilder Embed()
    {
        int recordCount = Record is null ? 0 : Record.Count;
        return new DiscordEmbedBuilder()
            .AddField(nameof(Name), Name.ToString(), false)
            .AddField(nameof(Id), Id.ToString(), false)
            .AddField(nameof(DiscordId), DiscordId.ToString(), false)
            .AddField($"{nameof(Record)}.Count", recordCount.ToString(), false);
    }
}
