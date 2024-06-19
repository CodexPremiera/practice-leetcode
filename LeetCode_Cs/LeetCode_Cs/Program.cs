// See https://aka.ms/new-console-template for more information

using LeetCode_Cs.Problems;

Console.WriteLine("Hello, World!");

string s = "ABCDEFGHIJKLMN";
int numRows = 4;

string convert = ZigZagConversion.Convert(s, numRows);

Console.WriteLine($"{s} => {convert}");