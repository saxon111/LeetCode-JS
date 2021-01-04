# 解法一
class Solution:
    def cuttingRope(self, n: int) -> int:
        def helper(n):
            if n == 2:
                return 1
            if f[n] != 0:
                return f[n]
            res = -1
            for i in range(1, n):
                res = max(res, i * (n - i), i * helper(n - i))
            f[n] = res
            return res

        f = [0] * (n + 1)
        return helper(n)

# 解法二:
class Solution:
    def cuttingRope(self, n: int) -> int:
        dp = [0] * (n + 1)
        dp[2] = 1
        for i in range(3, n + 1):
            for j in range(1, i):
                dp[i] = max(dp[i], j * (i - j), j * dp[i - j])
        return dp[n]
