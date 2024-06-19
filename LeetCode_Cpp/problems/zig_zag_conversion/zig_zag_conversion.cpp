#include "zig_zag_conversion.h"

/**
 * 6. ZIGZAG CONVERSION [MEDIUM]
 *
 * Converts the input string `s` into a zigzag pattern with `numRows` rows,
 * then concatenates the rows and returns the result.
 *
 * The zigzag pattern is formed by writing the characters of the string in rows
 * and then reading them line by line.
 *
 * Example:
 * If `s = "PAYPALISHIRING"` and `numRows = 3`, the zigzag pattern looks like:
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * And then read line by line gives "PAHNAPLSIIGYIR".
 *
 * Example 2:
 * If `s = "PAYPALISHIRING"` and `numRows = 4`, the zigzag pattern looks like:
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 * And then read line by line gives "PINALSIGYAHRPI".
 *
 * ---------------------------------------------------------------------------
 *
 * This solution divides the string into rows. Each row has a length of
 * 2 * numRows - 2, aka the cycle length. The first letter in each row is
 * picked up in each iteration and appended to the string builder. Then the
 * second and the first to the last, then third and second last, until the
 * numRows'th.
 *
 * ---------------------------------------------------------------------------
 *
 * @param s the input string to be converted into zigzag pattern
 * @param numRows the number of rows in the zigzag pattern
 * @return the string representation of the zigzag pattern
 */
std::string zig_zag_conversion::convert(std::string s, int numRows) {
    int length = s.length();

    // trivial case
    if (numRows == 1 || length <= numRows)
        return s;

    // build repository
    std::string string_builder = s;
    int index = 0;
    int cycle_length = 2 * numRows - 2;

    // add letters
    for (int row = 0; row < numRows; row++) {
        for (int letter = 0; letter + row < length; letter += cycle_length) {
            // add on each row
            string_builder[index++] = s[letter + row];

            // add on middle rows
            if (row != 0 && row != numRows - 1 && letter + cycle_length - row < length)
                string_builder[index++] = s[letter + cycle_length - row];
        }
    }

    return string_builder;
}