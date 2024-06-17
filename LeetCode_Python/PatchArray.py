"""
    PATCHING ARRAY [HARD]

    Given a sorted integer array nums and an integer n, this method adds/patches elements
    to the array such that any number in the range [1, n] inclusive can be formed by the
    sum of some elements in the array. It returns the minimum number of patches required.

    Example 1:
    Input: nums = [1, 3], n = 6
    Output: 1
    minPatches(nums: [1, 3], n: 6)
    Explanation: Combinations are [1], [3], [1, 3], forming sums 1, 3, 4.
    Add/Patch 2, combinations are [1], [2], [3], [1, 3], [2, 3], [1, 2, 3].
    Possible sums are 1, 2, 3, 4, 5, 6, which now covers the range [1, 6].
    So we only need 1 patch.

    Example 2:
    Input: nums = [1, 5, 10], n = 20
    Output: 2
    Explanation: The two patches can be [2, 4].

    Example 3:
    Input: nums = [1, 2, 2], n = 5
    Output: 0

    @param nums the sorted integer array
    @param n the upper bound of the range [1, n]
    @return the minimum number of patches required
"""


class Solution:
    def min_patches(self, nums: List[int], n: int) -> int:
        missing = 1
        patch_count = 0
        index = 0

        while missing <= n:
            if index < len(nums) and nums[index] <= missing:
                missing += nums[index]
                index += 1

            else:
                patch_count += 1
                missing += missing

        return patch_count
