/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    let sell = prices[0];
    let max = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {   //每一个高点拐点为卖点
            sell = prices[i];
            if (prices[i] >= prices[i + 1] || i === prices.length-1) {
                max = max + sell - buy;
            }
        }
        if (prices[i] <= prices[i - 1] && prices[i] <= prices[i + 1]) { //每一个低点拐点为买点
            buy = prices[i];
        }
    }
    return max;
};
