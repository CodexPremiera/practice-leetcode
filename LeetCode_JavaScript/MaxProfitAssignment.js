/**
 * 826. MOST PROFIT ASSIGNING WORK
 *
 * You have n jobs and m workers. You are given three arrays: difficulty,
 * profit, and worker where:
 *
 * - difficulty[i] and profit[i] are the difficulty and the profit of the ith job.
 * - worker[j] is the ability of jth worker (i.e., the jth worker can only complete
 *   a job with difficulty at most worker[j]).
 *
 * Every worker can be assigned at most one job, but one job can be completed
 * multiple times.
 *
 * For example, if three workers attempt the same job that pays $1, then the total
 * profit will be $3. If a worker cannot complete any job, their profit is $0.
 * Return the maximum profit we can achieve after assigning the workers to the jobs.
 *
 * @example
 * Example 1:
 * Input: difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]
 * Output: 100
 * Explanation: Workers are assigned jobs of difficulty [4,4,6,6] and they get a
 * profit of [20,20,30,30] separately.
 *
 * @example
 * Example 2:
 * Input: difficulty = [85,47,57], profit = [24,66,99], worker = [40,25,25]
 * Output: 0
 *
 * ---------------------------------------------------------------------------
 *
 * This solution makes a job-indices array corresponding to the difficulty. The jobs
 * and workers are then sorted by difficulty. Starting from the weakest worker, each
 * worker traverses the jobs until it picks a job with the most difficulty and profit.
 *
 * ---------------------------------------------------------------------------
 *
 * @param {number[]} difficulty - A list where difficulty[i] represents the difficulty
 *                                of the ith job.
 * @param {number[]} profit - A list where profit[i] represents the profit of the ith job.
 * @param {number[]} worker - A list where worker[j] represents the ability of the jth worker.
 *
 * @returns {number} The maximum profit that can be achieved after assigning the workers to the jobs.
 */
const maxProfitAssignment = function (difficulty, profit, worker) {
  // combine difficulty and profit
  const length = difficulty.length;
  const jobs = Array.from({ length }, (_, i) => i);

  // sort the jobs by difficulty and the workers by ability
  jobs.sort((a, b) => difficulty[a] - difficulty[b]);
  worker.sort((a, b) => a - b);

  // move ahead while there are jobs and worker can handle the difficulty
  let best_profit = 0;
  let max_profit = 0;
  let i = 0;

  for (let ability of worker) {
    while (i < length && difficulty[jobs[i]] <= ability) {
      best_profit = Math.max(best_profit, profit[jobs[i]]);
      i++;
    }

    max_profit += best_profit;
  }

  return max_profit;
}