
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let sortedArray = [];

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      sortedArray = sortedArray.concat(matrix[i]);
    } else {
      sortedArray = sortedArray.concat(matrix[i].reverse());
    }
  }

  return sortedArray;
}




