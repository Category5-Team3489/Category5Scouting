using System.Diagnostics;
using System.Collections.Concurrent;

namespace Cat5Processing;

public class Processor<C> where C : IContext, new()
{
    private bool isProcessing = false;

    private readonly ConcurrentQueue<ProcessingFunc> queue = new();

    private readonly C context;

    public Processor()
    {
        context = new C();
    }

    #region Process Methods
    public async Task<T> ProcessAsync<T>(string debugInfo, Func<C, Task<T>> task)
    {
        TaskCompletionSource<T> tcs = new();
        queue.Enqueue(new ProcessingFunc(async (ctx) =>
        {
            try
            {
                T output = await task(ctx);
                tcs.SetResult(output);
            }
            catch (Exception e)
            {
                Console.WriteLine($"[Processor ERROR] {debugInfo}: {e}");
            }
        }));
        return await tcs.Task;
    }
    public async Task ProcessAsync(string debugInfo, Func<C, Task> task)
    {
        TaskCompletionSource tcs = new();
        queue.Enqueue(new ProcessingFunc(async (ctx) =>
        {
            try
            {
                await task(ctx);
                tcs.SetResult();
            }
            catch (Exception e)
            {
                Console.WriteLine($"[Processor ERROR] {debugInfo}: {e}");
            }
        }));
        await tcs.Task;
    }
    public async Task<T> ProcessAsync<T>(string debugInfo, Func<C, T> task)
    {
        TaskCompletionSource<T> tcs = new();
        queue.Enqueue(new ProcessingFunc((ctx) =>
        {
            try
            {
                T output = task(ctx);
                tcs.SetResult(output);
            }
            catch (Exception e)
            {
                Console.WriteLine($"[Processor ERROR] {debugInfo}: {e}");
            }
        }));
        return await tcs.Task;
    }
    public async Task ProcessAsync(string debugInfo, Action<C> task)
    {
        TaskCompletionSource tcs = new();
        queue.Enqueue(new ProcessingFunc((ctx) =>
        {
            try
            {
                task(ctx);
                tcs.SetResult();
            }
            catch (Exception e)
            {
                Console.WriteLine($"[Processor ERROR] {debugInfo}: {e}");
            }
        }));
        await tcs.Task;
    }

    public T Process<T>(string debugInfo, Func<C, T> task)
    {
        ManualResetEventSlim mres = new(false);
#pragma warning disable CS8600 // Converting null literal or possible null value to non-nullable type.
        T output = default;
#pragma warning restore CS8600 // Converting null literal or possible null value to non-nullable type.
        queue.Enqueue(new ProcessingFunc((ctx) =>
        {
            try
            {
                output = task(ctx);
                mres.Set();
            }
            catch (Exception e)
            {
                Console.WriteLine($"[Processor ERROR] {debugInfo}: {e}");
            }
        }));
        mres.Wait();
#pragma warning disable CS8603 // Possible null reference return.
        return output;
#pragma warning restore CS8603 // Possible null reference return.
    }
    public void Process(string debugInfo, Action<C> task)
    {
        ManualResetEventSlim mres = new(false);
        queue.Enqueue(new ProcessingFunc((ctx) =>
        {
            try
            {
                task(ctx);
                mres.Set();
            }
            catch (Exception e)
            {
                Console.WriteLine($"[Processor ERROR] {debugInfo}: {e}");
            }
        }));
        mres.Wait();
    }
    #endregion Process Methods

    public async Task RunAsync()
    {
        isProcessing = true;
        Stopwatch timer = new();
        context.Start();
        while (isProcessing)
        {
            int count = queue.Count;
            for (int i = 0; i < count; i++)
            {
                if (queue.TryDequeue(out var task))
                {
                    await task.ProcessAsync(context);
                }
                else
                {
                    break;
                }
            }
            if (!timer.IsRunning)
            {
                timer.Start();
                context.Update(0);
            }
            else
            {
                context.Update(timer.Elapsed.TotalSeconds);
                timer.Restart();
            }
            await Task.Delay(20);
        }
    }
    public void Stop()
    {
        Process("stop", (ctx) =>
        {
            ctx.Stop();
        });
        isProcessing = false;
    }

    private class ProcessingFunc
    {
        private readonly Action<C>? syncFunc = null;
        private readonly Func<C, Task>? asyncFunc = null;

        public ProcessingFunc(Action<C> syncFunc)
        {
            this.syncFunc = syncFunc;
        }

        public ProcessingFunc(Func<C, Task> asyncFunc)
        {
            this.asyncFunc = asyncFunc;
        }

        public async Task ProcessAsync(C ctx)
        {
            if (syncFunc is not null)
            {
                syncFunc(ctx);
            }
            if (asyncFunc is not null)
            {
                await asyncFunc(ctx);
            }
        }
    }
}