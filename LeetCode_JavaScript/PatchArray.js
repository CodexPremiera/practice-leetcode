/**
 * PATCHING ARRAY [HARD]
 *
 * Given a sorted integer array nums and an integer n, this method adds/patches elements
 * to the array such that any number in the range [1, n] inclusive can be formed by the
 * sum of some elements in the array. It returns the minimum number of patches required.
 *
 * Example 1:
 * Input: nums = [1, 3], n = 6
 * Output: 1
 * minPatches(nums: [1, 3], n: 6)
 * Explanation: Combinations are [1], [3], [1, 3], forming sums 1, 3, 4.
 * Add/Patch 2, combinations are [1], [2], [3], [1, 3], [2, 3], [1, 2, 3].
 * Possible sums are 1, 2, 3, 4, 5, 6, which now covers the range [1, 6].
 * So we only need 1 patch.
 *
 * Example 2:
 * Input: nums = [1, 5, 10], n = 20
 * Output: 2
 * Explanation: The two patches can be [2, 4].
 *
 * Example 3:
 * Input: nums = [1, 2, 2], n = 5
 * Output: 0
 *
 * @param {number[]} nums - The sorted integer array
 * @param {number} n - The upper bound of the range [1, n]
 * @return {number} The minimum number of patches required
 */
const minPatches = function(nums, n) {
  let missing = 1;
  let index = 0;
  let patchCount = 0;

  // iterate through the missing, that is 1 to n
  while (missing <= n) {

    // this forms sums from 1 to (curr + missing - 1)
    if (index <= nums.length && nums[index] <= missing)
      missing += nums[index++];

    // this could not form the missing, hence patch
    else {
      missing += missing;
      patchCount++;
    }
  }

  return patchCount;
};