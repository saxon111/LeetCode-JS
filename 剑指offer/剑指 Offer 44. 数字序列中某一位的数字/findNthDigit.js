/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  let digits = 1,
    start = 1,
    count = 9;
  while (n > count) {
    n -= count;
    start *= 10;
    digits += 1;
    count = 9 * start * digits;
  }
  const num = start + Math.floor((n - 1) / digits);
  return +String(num)[(n - 1) % digits];
};
