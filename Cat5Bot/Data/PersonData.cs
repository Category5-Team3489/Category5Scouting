namespace Cat5Bot.Data;

#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.

public class PersonData : IEmbeddable
{
    public int Id { get; set; }
    public string Name { get; set; }
    public ulong DiscordId { get; set; }
    public List<int>? Record { get; set; }

    public PersonData() { }

    public PersonData(string name, ulong discordId)
    {
        Name = name;
        DiscordId = discordId;
    }

    // Fails if Record already contains eventId
    public bool Add(int eventId)
    {
        if (Record is null)
        {
            Record = new List<int>() { eventId };
        }
        else
        {
            if (Record.Contains(eventId))
            {
                return false;
            }

            Record.Add(eventId);
        }
        return true;
    }
    
    // Fails if Record is null or Record does not contain eventId
    public bool Remove(int eventId)
    {
        if (Record is null)
        {
            return false;
        }

        return Record.Remove(eventId);
    }

    public DiscordEmbedBuilder Embed()
    {
        return new DiscordEmbedBuilder()
            .AddField(nameof(Name), Name.ToString(), false)
            .AddField(nameof(Id), Id.ToString(), false)
            .AddField(nameof(DiscordId), DiscordId.ToString(), false)
            .AddField($"{nameof(Record)} Count", (Record is null ? 0 : Record.Count).ToString(), false);
    }
}
