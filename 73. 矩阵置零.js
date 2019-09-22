/**
 * 给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * O(1)空间的暴力
 */
var setZeroes = function(matrix) {
    const MODIFIED = -1000000;
    const R = matrix.length;
    const C = matrix[0].length;

    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
        if (matrix[r][c] == 0) {
          // We modify the corresponding rows and column elements in place.
          // Note, we only change the non zeroes to MODIFIED
          for (let k = 0; k < C; k++) {
            if (matrix[r][k] != 0) {
              matrix[r][k] = MODIFIED;
            }
          }
          for (let k = 0; k < R; k++) {
            if (matrix[k][c] != 0) {
              matrix[k][c] = MODIFIED;
            }
          }
        }
      }
    }

    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
        // Make a second pass and change all MODIFIED elements to 0 """
        if (matrix[r][c] == MODIFIED) {
          matrix[r][c] = 0;
        }
      }
    }
};