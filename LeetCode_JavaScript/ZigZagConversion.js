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
 * @param {string} s - The input string to be converted into zigzag pattern
 * @param {number} numRows - The number of rows in the zigzag pattern
 * @return {string} The string representation of the zigzag pattern
 */
const convert = function(s, numRows) {
  const length = s.length;

  // trivial case
  if (numRows === 1 || length <= numRows)
    return s;

  // build repository
  const stringBuilder = [];
  const cycleLength = 2 * numRows - 2;

  // add letters
  for (let row = 0; row < numRows; row++) {
    for (let letter = 0; letter + row < length; letter += cycleLength) {
      // add on all rows
      stringBuilder.push( s[letter + row] );

      // add on middle rows
      if (row !== 0 && row !== numRows - 1 && letter + cycleLength - row < length)
        stringBuilder.push( s[letter + cycleLength - row] );
    }
  }

  return stringBuilder.join('');
}