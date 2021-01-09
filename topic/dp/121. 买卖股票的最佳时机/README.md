### 解题思路

买卖股票是系列问题，此题是系列第一题，比较简单。

题目约束条件：最多只允许完成一笔交易（买入卖出一次）， 不能在买入股票前卖出股票。
分析题目:首先有个保底策略，什么都不做，利润是 0。所以利润肯定要大于等于 0。根据题意，我们制定的买卖策略就是:低买高卖，先买后卖。
如果买卖一股，一定是在第 i 天买入，第 j 天卖出（j > i）
由此我们很容易得到一个暴力解法
代码（暴力解法，两次遍历）

```js
// @param {number[]} prices
// @return {number}

var maxProfit = function (prices) {
  let res = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      res = Math.max(res, prices[j] - prices[i]);
    }
  }
  return res;
};
```

时间复杂度：两次遍历。O(n^2)

### 优化：

我们可以进行优化，按照日常买卖股票经验，我们肯定希望在历史最低点买入，在高点卖出。首先从 0 到 N-1 枚举 j，即第 j 天卖价格为 prices[j]。然后我们可以维护一个变量，时刻存储到当前为止(即 0~j-1 天)的最低价格 minPrice,那么最大的 prices[j] - minPrice 就是答案
直白点想能这样做的原因就是，假如我们在第 i 天以 i 的价格买入，那我们只能在第 j 天卖出（j > i）,我们的利润就是 prices[j] - prices[i],而如果我们保存了前 j 天的最低价格 minPrice,显然 minPrice < Prices[i]，那么肯定有 prices[j] - minPrice[i] > prices[j] - prices[i]
代码(一次遍历)

```js
// @param {number[]} prices
// @return {number}
var maxProfit = function (prices) {
  let min = prices[0];
  let res = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    res = Math.max(res, prices[i] - min);
  }
  return res;
};
```

时间复杂度:一次遍历。O(n)
