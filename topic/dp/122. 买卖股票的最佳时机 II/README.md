解题思路
* 分析题目:可以任意多次买卖，那我们的策略就是如果今天价格比明天低，那就今天买明天卖。
也就是把下图中的所有上坡都收集了。

* 但其实我最开始做这题的时候有疑问，这样是不是就是意味着我们可以在同一天买卖了呢？其实不是，简单分析一下，比如第i天的价格低于第i+1天，第i + 1天低于第i+2天，那经过分析，我们就会这样算利润（p[i + 2] - p[i + 1]）+ (p[i + 1] - p[i])这样看似是我们在第i+1天有卖有买的，但其实不是，因为这个式子经过数学计算就等同于p[i + 2] - p[i]（加粗部分可以抵消），所以这样计算是符合题意的，并非说可以同一天进行买卖
代码
```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let max = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            max += prices[i] - prices[i - 1]
        }
    }
    return max
};
时间复杂度：一次遍历O(n)
```
