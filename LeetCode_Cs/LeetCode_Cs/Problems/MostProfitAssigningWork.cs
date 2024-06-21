namespace LeetCode_Cs.Problems;

public class MostProfitAssigningWork
{
    /**
     * 826. MOST PROFIT ASSIGNING WORK
     *
     * <p> You have n jobs and m workers. You are given three arrays: difficulty,
     * profit, and worker where: </p>
     * 
     * <ul>
     *  <li>difficulty[i] and profit[i] are the difficulty and the profit of the ith job</li>
     *  <li>worker[j] is the ability of jth worker (i.e., the jth worker can only complete
     *      a job with difficulty at most worker[j]).</li>
     * </ul>
     * 
     * <p>Every worker can be assigned at most one job, but one job can be completed
     * multiple times.</p>
     * 
     * <p>For example, if three workers attempt the same job that pays $1, then the total
     * profit will be $3. If a worker cannot complete any job, their profit is $0.
     * Return the maximum profit we can achieve after assigning the workers to the jobs.</p>
     *
     * <pre>
     * Example 1:
     * Input: difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]
     * Output: 100
     * Explanation: Workers are assigned jobs of difficulty [4,4,6,6] and they get a
     * profit of [20,20,30,30] separately.
     *
     * Example 2:
     * Input: difficulty = [85,47,57], profit = [24,66,99], worker = [40,25,25]
     * Output: 0
     * </pre>
     *
     * ---------------------------------------------------------------------------
     *
     * <p> This solution maps the difficulty to its profit and lists them down. The jobs 
     * and workers are then sorted by difficulty. Starting from the weakest worker, each 
     * worker traverses the jobs until it picks a job with the most difficulty anD profit.
     * </p>
     *
     * <p> --------------------------------------------------------------------------- </p>
     *
     * @param difficulty A list where difficulty[i] represents the difficulty
     *                   of the ith job.
     * @param profit A list where profit[i] represents the profit of the ith job.
     * @param worker A list where worker[j] represents the ability of the jth worker.
     * 
     * @return The maximum profit that can be achieved after assigning the workers to the jobs.

     * */
    public int MaxProfitAssignment(int[] difficulty, int[] profit, int[] worker) 
    {
        // sort the arrays
        Array.Sort(difficulty, profit);
        Array.Sort(worker);

        int length = difficulty.Length;
        int maxProfit = 0;
        int bestProfit = 0;
        int i = 0;

        // assign the most profitable and difficult-possible work to worker
        foreach (var ability in worker)
        {
            while (i < length && difficulty[i] <= ability)
            {
                // check the max because the most difficult job is not necessarily the most profitable
                bestProfit = int.Max(bestProfit, profit[i]);
                i++;
            }

            maxProfit += bestProfit;
        }

        return maxProfit;
    }
}