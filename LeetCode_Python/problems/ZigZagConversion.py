class ZigZagConversion:
    """
        Converts the input string `s` into a zigzag pattern with `numRows` rows,
        then concatenates the rows and returns the result.

        The zigzag pattern is formed by writing the characters of the string in rows
        and then reading them line by line.

        Example:
           If `s = "PAYPALISHIRING"` and `numRows = 3`, the zigzag pattern looks like:
           P   A   H   N
           A P L S I I G
           Y   I   R
           And then read line by line gives "PAHNAPLSIIGYIR".

        Example 2:
           If `s = "PAYPALISHIRING"` and `numRows = 4`, the zigzag pattern looks like:
           P     I    N
           A   L S  I G
           Y A   H R
           P     I
           And then read line by line gives "PINALSIGYAHRPI".

        ---------------------------------------------------------------------------

        This solution divides the string into rows. Each row has a length of
        2 * numRows - 2, aka the cycle length. The first letter in each row is
        picked up in each iteration and appended to the string builder. Then the
        second and the first to the last, then third and second last, until the
        numRows'th.

        ---------------------------------------------------------------------------

        Parameters:
        s (str): The input string to be converted into zigzag pattern.
        num_rows (int): The number of rows in the zigzag pattern.

        Returns:
        str: The string representation of the zigzag pattern.
        """
    def convert(self, s: str, num_rows: int) -> str:
        length = len(s)

        # trivial case
        if num_rows == 1 or length <= num_rows:
            return s

        # build repository
        string_builder = []
        cycle_length = 2 * num_rows - 2

        # add letters
        for row in range(num_rows):
            for letter in range(0, length - row, cycle_length):
                # add on all rows
                string_builder.append(s[letter + row])

                # add more on middle rows
                if row != 0 and row != num_rows - 1 and letter + cycle_length - row < length:
                    string_builder.append(s[letter + cycle_length - row])

        return "".join(string_builder)
