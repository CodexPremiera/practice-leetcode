#include <cmath>
#include "sum_of_square_numbers.h"

/**
 * 633. SUM OF SQUARE NUMBERS [MEDIUM]
 *
 * <p>
 * Given a non-negative integer num, this method decides whether there exist
 * two integers a and b such that a^2 + b^2 = num.
 *
 * <pre>
 * Example 1:
 * Input: num = 5
 * Output: true
 * Explanation: 1 * 1 + 2 * 2 = 5
 * </pre>
 *
 * <pre>
 * Example 2:
 * Input: num = 3
 * Output: false
 * </pre>
 *
 * @param num the non-negative integer to check
 * @return true iff there exist integers a and b such that a^2 + b^2 = num
 *
 * ---------------------------------------------------------------------------
 *
 * <p>This solution uses Fermat's Sum of Two Squares Theorem:
 *
 * <p> An integer 𝑛 n can be expressed as the sum of two squares if and only
 * if every prime factor of 𝑛 of the form 4𝑘+3 occurs with an even exponent.
 *
 * <p> The approach iterates from 2 through odd numbers to √num, counting the
 * exponent of each factor. If the factor is of the form 4k+3 and the exponent
 * is odd, it means that num fails Fermat's theorem and thus, can't be expressed
 * as the sum of two squares.
 *
 */
bool sum_of_square_numbers::judgeSquareSum(int num) {
    int maxLimit = ceil(sqrt(num));

    for(int factor = 3; factor <= maxLimit; factor += 2) {
        if (num % factor == 0) {

            // count the exponent of the factor
            int exponentCount = 0;
            while (num % factor == 0) {
                num /= factor;
                exponentCount++;
            }

            // check if the factor is of form 4k + 3
            // if so, check if the exponent is even.
            if (factor % 4 == 3 && exponentCount % 2 != 0)
                return false;
        }
    }

    return num % 4 != 3;
}
