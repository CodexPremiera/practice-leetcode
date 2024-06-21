/**
 * 1482. Minimum Number of Days to Make m Bouquets
 *
 * You are given an integer array bloomDay, an integer m and an integer k.
 *
 * You want to make m bouquets. To make a bouquet, you need to use k adjacent
 * flowers from the garden.
 *
 * The garden consists of n flowers, the ith flower will bloom in the bloomDay[i]
 * and then can be used in exactly one bouquet.
 *
 * Return the minimum number of days you need to wait to be able to make m
 * bouquets from the garden. If it is impossible to make m bouquets return -1.
 *
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
 *
 * ---------------------------------------------------------------------------
 *
 * This solution ...
 *
 * ---------------------------------------------------------------------------
 *
 * @param {number[]} bloomDay - An array where bloomDay[i] represents the day the ith flower will bloom.
 * @param {number} m - The number of bouquets you want to make.
 * @param {number} k - The number of adjacent flowers needed to make one bouquet.
 * @returns {number} The minimum number of days needed to make m bouquets, or -1 if it is impossible.
 */
const MinDaysToMakeBouquets = (bloomDay, m, k) => {
  // if the total flowers needed is more than available, return -1
  if (m * k > bloomDay.length) return -1;

  const flowers = bloomDay.length;

  // set the range of days to find the minimum days
  let head = Math.min(...bloomDay);
  let tail = Math.max(...bloomDay);
  let minDays = -1;

  // binary search the daySet to find the min days
  while (head <= tail) {
    const currDay = head + tail >> 1;
    let bouquetCount = 0;
    let flowerCount = 0;
    let isFound = false;

    for(let i = 0; i < flowers; i++) {
      // case if the current flower hasn't bloomed
      if (bloomDay[i] > currDay) {
        flowerCount = 0;

        // end if not enough flowers going on
        if (flowers - i + 1 < k * (m - bouquetCount))
          break;

        continue;
      }

      // case if the current flower has bloomed
      flowerCount++;

      if (flowerCount === k) {
        bouquetCount++;
        flowerCount = 0;

        if (bouquetCount === m) {
          minDays = currDay;
          isFound = true;
          break;
        }
      }
    }

    if (isFound)
      tail = currDay - 1; // search the right half
    else
      head = currDay + 1; // search the left half
  }

  return minDays;
}



