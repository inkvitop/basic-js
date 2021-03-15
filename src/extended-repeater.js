const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let newString = ``
  let secondStr;
  let mainStringSep;
  let secondStringSep;
  let secondStringRep;

  if (options.additionSeparator === undefined) {
    secondStringSep = `|`
  }else{
    secondStringSep = options.additionSeparator
  }
  if (options.separator === undefined) {
    mainStringSep = `+`
  }else{
    mainStringSep = options.separator
  }
  if (options.additionRepeatTimes === undefined) {
    secondStringRep = 1
  }else{
    secondStringRep = options.additionRepeatTimes
  }

  if (options.addition !== undefined) {
    secondStr = repeatSecondStr(options.addition, secondStringRep, secondStringSep)
    function repeatSecondStr(secondStr, count, sep) {
      if (count < 1) return '';
      let result = '';
      for (let index = 0; index < count; index++) {
        result += secondStr;
        if (index + 1 !== count) {
          result += sep;
        }
      }
      return result;
    }
  }

  if (options.repeatTimes !== undefined) {
    for (let index = 0; index < options.repeatTimes; index++) {
      newString += str
      if (secondStr !== undefined) {
        newString += secondStr
      }
      if (index + 1 !== options.repeatTimes) {
        newString += mainStringSep;
      }
    }
  }else{
    if (secondStr !== undefined) {
      newString = str + secondStr
    }
  }
  return newString
};