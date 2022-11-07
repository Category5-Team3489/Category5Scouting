namespace Category5Scouting;

public class ProcessorContext
{
    public readonly List<Scouter> scouters = new();

    public string Serialize<TValue>(TValue value)
    {
        return JsonUtils.Serialize(value);
    }
}
