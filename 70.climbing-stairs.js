/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // if(n <= 1) return 1;
    // return climbStairs(n-1)+climbStairs(n-2);
    if(n==1) return 1;
    let s =[];
    s[1]=1;
    s[2]=2;
    for(let i=3;i<=n;i++)
    {
        s[i]=s[i-1]+s[i-2];
    }
    return s[n];
};

