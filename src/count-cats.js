const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let newArr = matrix.flat(Infinity);
  let count = 0;
  newArr.map(function(trg) {
    if (trg == `^^`) {
      count++
    }
  })
  return count
};