const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = getDepth(arr)
    function getDepth(arr) {
      return 1 + (arr instanceof Array ? arr.reduce(function(max, item) {
        return Math.max(max, getDepth(item));
      }, 0) : -1);
    }
       return result
  }
};