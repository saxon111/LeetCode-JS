/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var getMaxMatrix = function (matrix) {
  const res = new Array(4);
  let sum = 0;
  let max = -Infinity;
  let r1 = 0,
    c1 = 0;
  const n = matrix.length;
  const m = matrix[0].length;
  const b = new Array(m);

  for (let i = 0; i < n; i++) {
    for (let t = 0; t < m; t++) {
      b[t] = 0;
    }
    for (let j = i; j < n; j++) {
      sum = 0;
      for (let k = 0; k < m; k++) {
        b[k] += matrix[j][k];
        if (sum > 0) {
          sum += b[k];
        } else {
          sum = b[k];
          r1 = i;
          c1 = k;
        }
        if (sum > max) {
          max = sum;
          res[0] = r1;
          res[1] = c1;
          res[2] = j;
          res[3] = k;
        }
      }
    }
  }
  return res;
};
