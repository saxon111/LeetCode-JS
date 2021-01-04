/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) return 1;
  if (x === 0 || x === 1) return x;
  const helper = (x, N) => {
    if (N === 0) {
      return 1;
    }
    const y = helper(x, Math.floor(N / 2));
    return N % 2 === 0 ? y * y : y * y * x;
  };
  return n > 0 ? helper(x, n) : 1 / helper(x, -n);
};


