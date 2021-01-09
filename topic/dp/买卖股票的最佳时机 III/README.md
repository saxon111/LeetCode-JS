解题思路
分析题意：题目相较于系列 1， 2 的区别是，最多可以完成两笔交易

确定状态：最后一步:最优策略中，最后一次卖发生在第 j 天，枚举最后一次买发生在第几天，但是不知道之前有没有买卖过，所以需要记录下来

记录阶段，有五个阶段：

* 第一次买之前，即未进行买卖操作
* 第一次买之后持有股票，即只进行了一个买操作
* 第一次卖之后，第二次买之前
* 第二次买之后持有股票，即在完成了一笔交易的前提下，进行了第二次买操作；
* 第二次卖之后，即完成了全部两笔交易
状态变化

阶段可以保持:即不进行买卖操作
– 在阶段 2，继续持有，获利为当天价格减昨天价格
阶段可以变化:买或卖
– 在阶段 2，卖了一股后，进入阶段 3
最优策略一定是前 N 天(第 N-1 天)结束后，处于
– 阶段 1:没买卖过; 阶段 3:买卖过一次; 阶段 5:买卖过两次
转移方程: dp[i][j]表示前 i 天(第 i-1 天)结束后，在阶段 j 的最大获利

### 代码

```js

// @param {number[]} prices
// @return {number}

  var maxProfit = function (prices) {
  if (prices.length === 0) return 0
  const n = prices.length
  const dp = new Array(n + 1)
  for (let i = 0; i <= n; i++) {
  dp[i] = new Array(5)
  }
  for (let i = 0; i < 5; i++) {
  dp[0][i] = -Infinity
  }
  dp[0][0] = 0

      for (let i = 1; i <= n; i++) {

      // 阶段1, 3, 5 --- 手中无股票状态:
      //dp[i][j] = max{dp[i-1][j], dp[i-1][j-1] + Pi-1 – Pi-2}
          for (let j = 0; j < 5; j += 2) {
              dp[i][j] = dp[i - 1][j]
              if (i > 1 && j > 0 && dp[i - 1][j - 1] !== -Infinity) {
                  dp[i][j] = Math.max(dp[i - 1][j - 1] + prices[i - 1] - prices[i - 2], dp[i][j])
              }
          }

      //阶段2, 4 --- 手中有股票状态:
      //f[i][j] = max{dp[i-1][j] + Pi-1 – Pi-2, dp[i-1][j-1]}
          for (let j = 1; j < 5; j += 2) {
              dp[i][j] = dp[i - 1][j - 1]
              if (i > 1) {
                  dp[i][j] = Math.max(dp[i][j], dp[i - 1][j] + prices[i - 1] - prices[i - 2])

              }

          }
      }
      let res = 0

      // 最多买卖两次，所以答案是max{第一阶段，第三阶段，第五阶段}, 即清仓状态 下最后一天最大获利
      for (let i = 0; i < 5; i += 2) {
          res = Math.max(res, dp[n][i])
      }
      return res

  };
```
  时间复杂度:O(N), 空间复杂度:O(N)

可以再优化下代码，下面这个是我想很久后感觉都能说通，很符合题意的，包括初始状态和边界情况。
dp[i][j] 代表的是前 i 天（第 i - 1 天结束后）在第 j 个阶段的收益（详细看注释）
### 代码 2
```js
var maxProfit = function (prices) {
if (prices.length === 0) return 0
const n = prices.length
const dp = new Array(n + 1)
for (let i = 0; i <= n; i++) {
dp[i] = new Array(5)
}

    // 刚开始(前0天)处于阶段1 dp[0][0] = 0
    // dp[0][1] = f[0][2] = f[0][3] = f[0][4] = -∞
    for (let i = 0; i < 5; i++) {
        dp[0][i] = -Infinity
    }
    dp[0][0] = 0
    for (let i = 1; i <= n; i++) {
         // 不论哪天，只有在第一阶段，收益就是0
        dp[i][0] = 0
        for (let j = 1; j < 5; j++) {
        // 第3阶段，第五阶段（对应j = 2， j = 4）,就是由前一天的前一个阶段（j - 1）再当天卖出到j阶段的，那么就是要加上当天的价格
        // 第2， 第四阶段（对应j = 1， j = 3）,即在当天买入了，那么就需要之前阶段的收益 - 当天价格
            dp[i][j] = Math.max(dp[i - 1][j - 1] + (j % 2 === 0 ? 1 : -1) * prices[i - 1], dp[i - 1][j])
        }
    }
    let res = 0
    // 在第1阶段，第3阶段和第五阶段选最大值（清仓状态，对应i 为 0，2，4）
    for (let i = 0; i < 5; i += 2) {
        res = Math.max(res, dp[n][i])
    }
    return res

};
```
### 优化
当然，我们可以进行优化，因为 dp[i][0-4]只依赖于 dp[i-1][0-4],上述代码分的也很细，其实也可以不分那么细，写的简单点。
我们可以用五个变量来存这五个状态，分别记为 before，buy1，sell1，buy2，sell2, before 就是未进行任何操作，所以就是 0，无需用变量存

代码（空间优化）
```js
var maxProfit = (prices) => {
const n = prices.length
let buy1 = -prices[0]
let buy2 = -prices[0]
let sell1 = 0
let sell2 = 0
for (let i = 1; i < prices.length; i++) {
buy1 = Math.max(buy1, -prices[i])
sell1 = Math.max(buy1 + prices[i], sell1)
buy2 = Math.max(sell1 - prices[i], buy2)
sell2 = Math.max(buy2 + prices[i], sell2)

    }
    return sell2

}
```
这个空间优化版本的推导其实和第一种不太一样。

* 首先我们最后输出的是 sell2，按理我们应该取的是 sell1，sell2，0，中的最大值，但 sell1，sell2 初始就设为 0 了，最后结果肯定也大于等于 0，而计算过程中也是一直比较的，比如 sell2 和 buy2 + prices[i]里取最大值，而后者肯定大于等于 sell1，所以最后输出的 sell2 即为结果。
* 还有就是，同一天进行买入卖出收益为 0，所以采用当天的 buy1 算 sell1 不影响结果。也可以这么看如果 buy1 = Math.max(buy1', -prices[i]) 就等于 buy1‘ 那么对应 sell1，用 buy1 还是 buy1'算就没区别了，如果 buy1 = Math.max(buy1', -prices[i])是后者-prices[i],那对于 sell1 也没影响，因为 sell1 肯定大于等于 0，而-prices[i]肯定小于等于 0。后面的 buy2，sell2 能这么算是一样的道理。
* 其实细想，感觉这个更像系列 1 问题和系列 2 问题的结合，有点贪心的意思，buy1 就是记录到当前时间的历史最低点，sell1 呢是由 buy1 推导来的，这两个其实就是系列问题一的答案，buy2 呢由意义上是由今天之前的 sell1 推导来的，之所以可以用今天的 sell1 是因为 sell1 = Math.max(buy1 + prices[i], sell1‘)如果就是 sell1’，那用 sell1 和 sell1‘毫无影响，而如果是前者，那么 sell1 - prices[i]就变成了 buy1 肯定小于等于 0，也没影响，sell2 同理。
