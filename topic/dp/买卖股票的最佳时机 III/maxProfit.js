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

