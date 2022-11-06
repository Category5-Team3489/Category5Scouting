using System.Collections.Concurrent;

namespace Category5Scouting;

public class ScoutingProcessor
{
    // sync proccesing method with ref data to return
    // async processing method with ref data to return
    // async proccesing method
    // sync proccessing method

    // debug string input

    private bool isProcessing = false;

    private readonly ConcurrentQueue<(ProcessingFunc<(ScoutingProcessorContext ctx, Output output)> func, Output output)> queue = new();

    private readonly ScoutingProcessorContext processorContext = new();

    public async ProcessAsync<T>(Func<(ScoutingProcessorContext ctx, Output<T> output), Task> func, out Output<T> output) where T : new()
    {
        output = new();

        queue.Enqueue()
    }

    public async Task BeginProcessing()
    {
        while (isProcessing)
        {
            int count = queue.Count;
            for (int i = 0; i < count; i++)
            {
                if (queue.TryDequeue(out var item))
                {
                    var func = item.func;
                    var output = item.output;
                    await func.ProcessAsync((processorContext, output));
                }
                else
                {
                    break;
                }
            }
            await Task.Delay(1);
        }
    }
    public async Task EndProcessing()
    {
        
    }

    private class ProcessingFunc<T>
    {
        private readonly Action<T>? syncFunc = null;
        private readonly Func<T, Task>? asyncFunc = null;

        public ProcessingFunc(Action<T> syncFunc)
        {
            this.syncFunc = syncFunc;
        }

        public ProcessingFunc(Func<T, Task> asyncFunc)
        {
            this.asyncFunc = asyncFunc;
        }

        public async Task ProcessAsync(T refs)
        {
            if (syncFunc is not null)
            {
                syncFunc(refs);
            }
            if (asyncFunc is not null)
            {
                await asyncFunc(refs);
            }
        }
    }

    public abstract class Output { }
    public class Output<T> : Output
    {
        public T? Data { get; set; }

        public Output() { }

        private Output(T? data)
        {
            Data = data;
        }
    }
}