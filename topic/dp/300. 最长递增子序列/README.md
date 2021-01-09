## 题解：

### 方法一：动态规划

- step1:确定状态

  - 对于最优的策略，一定有最后一个元素 a[i]
  - 有两种情况：

  * 1. 第一种情况：最优策略中最长上升子序列就是{a[i]}, 答案就是 1
  * 2. 第二种情况，子序列长度大于 1，那么最优策略中 a[i]前一个元素是 a[j],且 a[j] < a[i]

- step2:确定转移方程

  - 设 dp[i]: 以 a[i]结尾的最长上升子序列的长度,由 step1 中分析可以得到:
  - dp[i]=max{1, dp[j]+1 | j < i and a[j] < a[i]}

- 确定初始值和边界情况
  - dp[i]的所有元素置 1，因为以上情况一中可知，每个元素至少可以单独成为子序列
- 计算顺序
  - 依次计算 dp[1]....dp[n - 1]即可，答案是 max{dp[1].....dp[n - 1]}
- 算法时间复杂度 O(n2)，空间复杂度 O(n)

### 代码

```js
// javascript
var lengthOfLIS = function (nums) {
  const len = nums.length;
  if (len === 0 || len === 1) return len;
  const dp = new Array(len).fill(1);
  let res = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    res = Math.max(dp[i], res);
  }
  return res;
};
```

```py
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        if nums == None or len(nums) == 0:
            return 0
        dp = [1] * len(nums)
        for i in range(len(nums)):
            for j in range(i):
                if nums[j] < nums[i]:
                    dp[i] = max(dp[i], dp[j] + 1)


        return max(dp)
```

### 方法二 贪心+二分查找

- 可以分析下方法一中动态规划的方程： dp[i]=max{1, dp[j]+1 | j < i and a[j] < a[i]}
- 发现每个 dp[i]都在寻找前面比自己小的 a[j]里，最大的 dp[j]
- 以序列 a [5,1,2,7,6,3,2,10]举例，f[0]是 1， f[1]也是 1，所以其实 f[0]和 a[0]是没用的，因为 f[1]和 f[0]一样大，a[1]还比 a[0]小，后面如果有一个值比 a[0]，那肯定也比 a[1]大.
- 而我们要想上升子序列尽可能的长，那肯定希望序列增的比较慢，比如 序列 5，8 我们要想他继续递增，后面的数只能从 9 开始，而如果序列是 5，6，那要想继续递增下去，我们可选的数可以是 7，8，9...
- 因此，对于每个相同的 dp[i]值，我们只需要记录当前为止拥有这个 f 值的最小的 a[i]。
- 一个新的数 a[i]来了，它的 dp 值很好算:在序列(a[1]=1, a[6]=2, a[5]=3)中
  找到最后一个比它小的数 a[j]，f[i] 就是 f[j] + 1
  _ a[i]=10, 找到 a[5] = 3，所以 dp[i] = 3 + 1 = 4
  _ a[i]=2，找到 a[1] = 1，所以 dp[i] = 1 + 1 = 2

- 然后用 a[i]替换序列中的 a[j]的下一个，因为 dp[i]和它值一样，但 a[i]更小
- 由于序列永远是单调的，所以可以用二分查找。

## 代码

使用一个数组 d,d[i]记录序列长度为 i 的最小数字，（有多个位置，以这些位置为结尾的 LIS 长度都为 i， 则这些数字中最小的一个存在 d 中） 则 d 数组严格递增。且下标表示 LIS 长度，也是严格递增，可以在 d 数组中进行二分查找。

```py
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        if not nums or nums is None:
            return 0
        res = 1
        n = len(nums)
        d = [1] * (n + 1)
        d[res] = nums[0]
        for num in nums:
            if num > d[res]:
                res += 1
                d[res] = num
            else:
                pos = self.first_GTE(d, res, num)
                d[pos] = num
        return res

     ## find the first number > target
    def first_GTE(self, A, r, target):
        l = 1
        while l + 1 < r:
            mid = l + ((r - l) // 2)
            if A[mid] >= target:
                r = mid
            else:
                l = mid
        if A[l] >= target:
            return l
        return r
```

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let res = 1;
  if (nums === null || nums.length === 0) return 0;

  const firstGTE = (nums, r, target) => {
    let l = 1;
    while (l + 1 < r) {
      const mid = l + ((r - l) >> 1);
      if (nums[mid] > target) {
        r = mid;
      } else {
        l = mid;
      }
    }
    if (nums[l] >= target) {
      return l;
    }
    return r;
  };
  const len = nums.length;
  const d = new Array(len + 1);
  d[res] = nums[0];

  for (let i = 1; i < len; i++) {
    if (nums[i] > d[res]) {
      d[++res] = nums[i];
    } else {
      const pos = firstGTE(d, res, nums[i]);
      d[pos] = nums[i];
    }
  }
  return res;
};
```
