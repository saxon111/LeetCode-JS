/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// 解法一:
var spiralOrder = function (matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }
  const rows = matrix.length;
  const cols = matrix[0].length;
  const visited = new Array(rows);
  for (let i = 0; i < rows; i++) {
    visited[i] = new Array(cols).fill(false);
  }
  const total = rows * cols;
  const res = new Array(total).fill(0);
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let row = 0;
  let col = 0;
  let dirIndex = 0;
  for (let i = 0; i < total; i++) {
    res[i] = matrix[row][col];
    visited[row][col] = true;
    const nextRow = row + directions[dirIndex][0];
    const nextCol = col + directions[dirIndex][1];
    if (
      nextRow < 0 ||
      nextRow >= rows ||
      nextCol < 0 ||
      nextCol >= cols ||
      visited[nextRow][nextCol]
    ) {
      dirIndex = (dirIndex + 1) % 4;
    }
    row += directions[dirIndex][0];
    col += directions[dirIndex][1];
  }
  return res;
};

// 解法二:

var spiralOrder = function (matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return []
    }
    const rows = matrix.length
    const cols = matrix[0].length
    const res = new Array(rows * cols)
    let top = 0, left = 0, right = cols - 1, bottom = rows - 1, index = 0
    while (top <= bottom && left <= right) {
        for (let col = left; col <= right; col++) {
            res[index++] = matrix[top][col]
        }
        for (let row = top + 1; row <= bottom; row++) {
            res[index++] = matrix[row][right]
        }
        if (left < right && top < bottom) {
            for (let col = right - 1; col >= left; col--) {
                res[index++] = matrix[bottom][col]
            }
            for (let row = bottom - 1; row > top; row--) {
                res[index++] = matrix[row][left]
            }
        }
        left++
        right--
        top++
        bottom--
    }
    return res



};