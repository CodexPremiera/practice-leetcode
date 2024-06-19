public class ZigZagConversion {
    /**
     * 6. ZIGZAG CONVERSION [MEDIUM]
     *
     * <p> Converts the input string {@code s} into a zigzag pattern with {@code numRows} rows,
     * then concatenates the rows and returns the result.
     *
     * <p> The zigzag pattern is formed by writing the characters of the string in rows
     * and then reading them line by line.
     *
     * <pre>
     * Example:
     * If {@code s = "PAYPALISHIRING"} and {@code numRows = 3}, the zigzag pattern looks like:
     * P   A   H   N
     * A P L S I I G
     * Y   I   R
     * And then read line by line gives "PAHNAPLSIIGYIR".
     *
     * Example 2:
     * If {@code s = "PAYPALISHIRING"} and {@code numRows = 4}, the zigzag pattern looks like:
     * P     I    N
     * A   L S  I G
     * Y A   H R
     * P     I
     * And then read line by line gives "PINALSIGYAHRPI".
     * </pre>
     *
     * ---------------------------------------------------------------------------
     *
     * <p>This solution divides the string into rows. Each row has a length of
     * 2 * numRows - 2, aka the cycle length. The first letter in each row is
     * picked up in each iteration and appended to the string builder. Then the
     * second and the first to the last, then third and second last, until the
     * numRows'th.
     *
     * <p> ---------------------------------------------------------------------------
     *
     * @param s the input string to be converted into zigzag pattern
     * @param numRows the number of rows in the zigzag pattern
     * @return the string representation of the zigzag pattern
     * */
    public static String convert(String s, int numRows) {
        // trivial cases
        int length = s.length();
        if (numRows == 1 || length <= numRows)
            return s;

        // make repository
        StringBuilder stringBuilder = new StringBuilder();
        int cycleLength = 2 * numRows - 2;

        // add letters
        for (int row = 0; row < numRows; row++) {
            for (int letter = 0; letter + row < length; letter += cycleLength) {
                // append on all rows
                stringBuilder.append( s.charAt(letter + row) );

                // append again on middle rows
                if (row != 0 && row != numRows - 1 && letter + cycleLength - row < length)
                    stringBuilder.append( s.charAt(letter + cycleLength - row) );
            }
        }

        return stringBuilder.toString();
    }
}
