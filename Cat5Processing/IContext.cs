namespace Cat5Processing;

public interface IContext
{
    public void Start();
    public void Update(double deltaTime);
    public void Stop();
}