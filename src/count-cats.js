module.exports = function countCats(matrix) {
  
  return matrix.reduce((acc, item) => item.includes('^^') ?
    acc + item.filter((str) => str === '^^').length :
    acc,
    0);
};
