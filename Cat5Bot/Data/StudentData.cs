namespace Cat5Bot.Data;

#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.

public class StudentData
{
    public int Id { get; set; }
    public string Name { get; set; }
    public List<AttendanceData> Record { get; set; }
}
