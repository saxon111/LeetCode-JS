#递归
class Solution:
    def myPow(self, x: float, n: int) -> float:
        def help(N):
            if N == 0:
                return 1
            y = help(N // 2)
            return y * y if N % 2 == 0 else y * y * x
        return help(n) if n > 0 else 1 / help(-n)



# 非递归
class Solution:
    def myPow(self, x: float, n: int) -> float:
        if x == 0: return 0
        res = 1
        if n < 0: x, n = 1 / x, -n
        while n:
            if n & 1: res *= x
            x *= x
            n >>= 1
        return res

