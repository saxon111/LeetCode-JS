/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function (matrix, max) {
  let res = -Infinity;
  let row = matrix.length;
  let column = matrix[0].length;
  let b = Array.from({ length: column }, () => 0);
  for (let i = 0; i < row; i++) {
    // 遍历开始行
    for (let t = 0; t < b.length; t++) b[t] = 0; // 开始行改变之后需要把每列之和置零
    for (let j = i; j < row; j++) {
      for (let k = 0; k < column; k++) b[k] += matrix[j][k];
      // 把所有可能遍历出来
      for (let m = 0; m < b.length; m++) {
        let sum = 0;
        for (let n = m; n < b.length; n++) {
          sum += b[n];
          if (sum <= max && sum > res) {
            // 只有小于max，且大于之前的值
            res = sum;
          }
        }
      }
    }
  }
  return res;
};
