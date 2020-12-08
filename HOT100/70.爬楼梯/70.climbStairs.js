var climbStairs = function (n) {
  let p = 0,
    q = 1;
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res = p + q;
    p = q;
    q = res;
  }
  return res;
};
