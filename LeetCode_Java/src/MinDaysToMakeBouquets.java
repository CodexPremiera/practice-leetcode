public class MinDaysToMakeBouquets {
    /**
     * 1482. MINIMUM NUMBER OF DAYS TO MAKE M BOUQUETS
     *
     * <p> You are given an integer array bloomDay, an integer m and an integer k. </p>
     *
     * <p> You want to make m bouquets. To make a bouquet, you need to use k adjacent
     * flowers from the garden. </p>
     *
     * <p> The garden consists of n flowers, the ith flower will bloom in the bloomDay[i]
     * and then can be used in exactly one bouquet. </p>
     *
     * <p> Return the minimum number of days you need to wait to be able to make m
     * bouquets from the garden. If it is impossible to make m bouquets return -1. </p>
     *
     * <pre>
     * Example 1:
     * Input: bloomDay = [1,10,3,10,2], m = 3, k = 1
     * Output: 3
     * Explanation: Let us see what happened in the first three days. x means flower
     * bloomed and _ means flower did not bloom in the garden.
     * We need 3 bouquets each should contain 1 flower.
     * After day 1: [x, _, _, _, _]   // we can only make one bouquet.
     * After day 2: [x, _, _, _, x]   // we can only make two bouquets.
     * After day 3: [x, _, x, _, x]   // we can make 3 bouquets. The answer is 3.
     *
     * Example 2:
     * Input: bloomDay = [1,10,3,10,2], m = 3, k = 2
     * Output: -1
     * Explanation: We need 3 bouquets each has 2 flowers, that means we need 6 flowers.
     * We only have 5 flowers so it is impossible to get the needed bouquets and we
     * return -1.
     *
     * Example 3:
     * Input: bloomDay = [7,7,7,7,12,7,7], m = 2, k = 3
     * Output: 12
     * Explanation: We need 2 bouquets each should have 3 flowers.
     * Here is the garden after the 7 and 12 days:
     * After day 7: [x, x, x, x, _, x, x]
     * We can make one bouquet of the first three flowers that bloomed. We can't make another
     * bouquet from the last three flowers that bloomed because they are not adjacent.
     * After day 12: [x, x, x, x, x, x, x]
     * It is obvious that we can make two bouquets in different ways.
     * </pre>
     *
     * ---------------------------------------------------------------------------
     *
     * <p> This solution The MinDays method determines the minimum number of days required to
     * make m bouquets, each consisting of k adjacent flowers from the bloomDay array. </p>
     *
     * <p> Initially, it checks if the total flowers needed exceed the available flowers,
     * returning -1 if so. </p>
     *
     * <p> It then finds the range of days by identifying the smallest and largest bloom days.
     * It uses binary search within this range to then efficiently test each day using the
     * helper function CanMakeBouquet and ultimately find the minimum day.
     *
     * <p> The helper function CanMakeBouquet iterates over the bloom days to count possible
     * bouquets and determines if the current day allows making m bouquets.
     * </p>
     *
     * <p> --------------------------------------------------------------------------- </p>
     *
     * @param bloomDay An array where bloomDay[i] represents the day the ith flower will bloom.
     * @param m The number of bouquets you want to make.
     * @param k The number of adjacent flowers needed to make one bouquet.
     * @return The minimum number of days needed to make m bouquets, or -1 if it is impossible.
     * */
    public int minDays(int[] bloomDay, int m, int k) {
        // if the total flowers needed is more than available, return -1
        if (m * k > bloomDay.length) return -1;

        // binary search the range of days to find the minimum days
        int head = bloomDay[0];
        int tail = head;

        for (int day : bloomDay) {
            head = Math.min(head, day);
            tail = Math.max(tail, day);
        }

        int minDays = -1;

        while (head <= tail) {
            int currDay = (head + tail) >> 1;

            if (canMakeBouquet(bloomDay, currDay, k, m)) {
                minDays = currDay;
                tail = currDay - 1; // search the left half
            } else {
                head = currDay + 1; // search the right half
            }
        }

        return minDays;
    }

    private boolean canMakeBouquet(int[] bloomDay, int currDay, int k, int m) {
        int bouquetCount = 0;
        int flowerCount = 0;

        for (int i = 0; i < bloomDay.length; i++) {
            // case if the current flower hasn't bloomed
            if (bloomDay[i] > currDay) {
                // end if not enough flowers going on
                if (bloomDay.length - i + 1 < k * (m - bouquetCount))
                    break;

                flowerCount = 0;
                continue;
            }

            // case if the current flower has bloomed
            flowerCount++;

            if (flowerCount == k) {
                if (++bouquetCount == m)
                    return true;

                flowerCount = 0;
            }
        }

        return false;
    }
}
