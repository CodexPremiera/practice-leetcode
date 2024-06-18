import math


class SumOfSquareNumbers:
    """
    633. SUM OF SQUARE NUMBERS [MEDIUM]

    Given a non-negative integer c, this method decides whether there exist
    two integers a and b such that a^2 + b^2 = c.

    Example 1:
        Input: c = 5
        Output: True
        Explanation: 1 * 1 + 2 * 2 = 5

    Example 2:
        Input: c = 3
        Output: False

    ---------------------------------------------------------------------------

    This solution uses Fermat's Sum of Two Squares Theorem:

    An integer n can be expressed as the sum of two squares if and only if
    every prime factor of n of the form 4k+3 occurs with an even exponent.

    The approach iterates from 2 through odd numbers to √c, counting the
    exponent of each factor. If the factor is of the form 4k+3 and the exponent
    is odd, it means that c fails Fermat's theorem and thus, can't be expressed
    as the sum of two squares.

    ---------------------------------------------------------------------------

    :param c: the non-negative integer to check
    :return: True if there exist integers a and b such that a^2 + b^2 = c
    """

    def judgeSquareSum(self, c: int) -> bool:
        squareNum = int(math.sqrt(c) + 1)

        for factor in range(2, squareNum + 1):
            if c % factor == 0:
                exponentCount = 0
                while c % factor == 0:
                    exponentCount += 1
                    c /= factor

                if factor % 4 == 3 and exponentCount % 2 != 0:
                    return False

        return c % 4 != 3