/**
 * January 01, 2025
 * 
 * [455. Assign Cookies (Easy)](https://leetcode.com/problems/assign-cookies/description/?envType=daily-question&envId=2024-01-01)
 * 
 * INSTRUCTION
 * Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie. 
 * Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie 
 * j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to 
 * maximize the number of your content children and output the maximum number.
 * 
 * APPROACH
 * Sort the arrays in ascending order. Iterate through the cookies, if it is suitable for the current child, the gratified count increases.
 */

const findContentChildren = function(g, s) {
    // sort the arrays in ascending order
    g.sort(function(a, b){return a - b})
    s.sort(function(a, b){return a - b})

    // iterate through the cookies until it is suitable for the current child
    let gratified = 0;
    let child = 0;

    for(let cookie = 0; cookie < s.length; cookie++) {
        if (s[cookie] >= g[child]) {
            gratified++;
            child++
        }
    }

    return gratified
};

console.log(findContentChildren([1,2,3], [1,1]));
console.log(findContentChildren([1,2], [1,2,3]));
console.log(findContentChildren([10,9,8,7], [5,6,7,8]));

