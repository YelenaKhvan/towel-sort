
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let sorted = [];
  let rows = matrix.length;
  let columns = matrix[0].length;
  let rowStart = 0, rowEnd = rows - 1, colStart = 0, colEnd = columns - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      sorted.push(matrix[rowStart][i]);
    }
    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      sorted.push(matrix[i][colEnd]);
    }
    colEnd--;

    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        sorted.push(matrix[rowEnd][i]);
      }
      rowEnd--;
    }

    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        sorted.push(matrix[i][colStart]);
      }
      colStart++;
    }
  }

  return sorted;
}



