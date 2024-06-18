public class SumOfSquareNumbers {
    public static void main(String[] args) {}

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
     * <p> ---------------------------------------------------------------------------
     *
     * @param c the non-negative integer to check
     * @return true iff there exist integers a and b such that a^2 + b^2 = num
     *
     */
    public boolean judgeSquareSum(int c) {
        int squareNum = (int) Math.sqrt(c);

        for (int factor = 2; factor <= squareNum; factor++) {
            if (c % factor == 0) {
                int exponentCount = 0;
                while (c % factor == 0) {
                    exponentCount++;
                    c /= factor;
                }

                if (factor % 4 == 3 && exponentCount % 2 != 0)
                    return false;
            }
        }

        return c % 4 != 3;
    }
}
