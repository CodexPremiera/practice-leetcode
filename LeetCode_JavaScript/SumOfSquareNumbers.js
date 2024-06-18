/**
 * 633. SUM OF SQUARE NUMBERS [MEDIUM]
 *
 * Given a non-negative integer c, this method decides whether there exist
 * two integers a and b such that a^2 + b^2 = c.
 *
 * Example 1:
 * Input: c = 5
 * Output: true
 * Explanation: 1 * 1 + 2 * 2 = 5
 *
 * Example 2:
 * Input: c = 3
 * Output: false
 *
 * ---------------------------------------------------------------------------
 *
 * This solution uses Fermat's Sum of Two Squares Theorem:
 *
 * An integer n can be expressed as the sum of two squares if and only if
 * every prime factor of n of the form 4k+3 occurs with an even exponent.
 *
 * The approach iterates from 2 through odd numbers to √c, counting the
 * exponent of each factor. If the factor is of the form 4k+3 and the exponent
 * is odd, it means that c fails Fermat's theorem and thus, can't be expressed
 * as the sum of two squares.
 *
 * ---------------------------------------------------------------------------
 *
 * @param {number} c - The non-negative integer to check
 * @return {boolean} true if there exist integers a and b such that a^2 + b^2 = c
 */
const judgeSquareSum = function(c) {
  const squareNum = Math.sqrt(c);

  for (let factor = 2; factor <= squareNum; factor++) {
    if (c % factor === 0) {
      let exponentCount = 0;
      while (c % factor === 0) {
        exponentCount++;
        c /= factor;
      }

      if (factor % 4 === 3 && exponentCount % 2 !== 0)
        return false;
    }
  }

  return c % 4 !== 3;
}