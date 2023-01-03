namespace Cat5Bot.Data;

#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.

public class EventData
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Info { get; set; }
    public DateTime StartTime { get; set; }
    public DateTime EndTime { get; set; }
}