from typing import List


class MostProfitAssigningWork:
    """
        826. MOST PROFIT ASSIGNING WORK

        You have n jobs and m workers. You are given three arrays: difficulty,
        profit, and worker where:

        - difficulty[i] and profit[i] are the difficulty and the profit of the ith job
        - worker[j] is the ability of jth worker (i.e., the jth worker can only complete
        a job with difficulty at most worker[j]).

        Every worker can be assigned at most one job, but one job can be completed
        multiple times.

        For example, if three workers attempt the same job that pays $1, then the total
        profit will be $3. If a worker cannot complete any job, their profit is $0.
        Return the maximum profit we can achieve after assigning the workers to the jobs.

        Example 1:
            Input: difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]
            Output: 100
            Explanation: Workers are assigned jobs of difficulty [4,4,6,6] and they get a
            profit of [20,20,30,30] separately.

        Example 2:
            Input: difficulty = [85,47,57], profit = [24,66,99], worker = [40,25,25]
            Output: 0

        ---------------------------------------------------------------------------

        This solution maps the difficulty to its profit and lists them down. The jobs
        and workers are then sorted by difficulty. Starting from the weakest worker, each
        worker traverses the jobs until it picks a job with the most difficulty and profit.

        ---------------------------------------------------------------------------

        Parameters:
        difficulty (List[int]): A list where difficulty[i] represents the difficulty
        of the ith job.
        profit (List[int]): A list where profit[i] represents the profit of the ith job.
        worker (List[int]): A list where worker[j] represents the ability of the jth worker.

        Returns:
        int: The most profit that can be achieved after assigning the workers to the jobs.
        """
    def maxProfitAssignment(self, difficulty: List[int], profit: List[int], worker: List[int]) -> int:
        # sort the list of jobs by difficulty
        jobs = sorted(zip(difficulty, profit))
        worker.sort()

        max_profit = i = best_profit = 0

        # assign work
        for ability in worker:
            while i < len(jobs) and jobs[i][0] <= ability:

                # check the max because the most difficult job is not necessarily the most profitable
                best_profit = Math.max(best_profit, jobs[i][1])
                i += 1

            max_profit += best_profit

        return max_profit
