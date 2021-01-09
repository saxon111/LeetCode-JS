/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  const n = prices.length;
  let sell = 0,
    buy = -prices[0];
  for (let i = 1; i < n; ++i) {
    buy = Math.max(buy, sell - prices[i]);
    sell = Math.max(sell, buy + prices[i] - fee);
  }
  return sell;
};
