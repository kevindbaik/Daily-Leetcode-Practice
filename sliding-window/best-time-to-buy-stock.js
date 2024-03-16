// 121. Best Time to Buy and Sell Stock
// Easy
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

//* You are given an array prices where prices[i] is the price of a given stock on the ith day.
//* You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
//* Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

/**
 * * Example 1:
 * * Input: prices = [7,1,5,3,6,4]
 * * Output: 5


* * Example 2:
* * Input: prices = [7,6,4,3,1]
* * Output: 0

*/

// in order to make profit, i < future day
  // calculation for profit: n - i
// use two pointers, left and right
  // left represents buy day
  // right represents sell day
  // left starts before right since time moves linear
// calculate difference, keep track of highest difference, return highest


var maxProfit = function(prices) {
  let maxProfit = 0;
  let left = 0;
  let right = 1;

  while(right < prices.length) {
      if(prices[right] > prices[left]) {
          const difference = prices[right] - prices[left];
          if(difference > maxProfit) {
              maxProfit = difference;
          }
      } else {
          left = right
      }
      right++
  }

  return maxProfit
};
