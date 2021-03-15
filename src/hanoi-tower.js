const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let tempTurns = 1;
  let tempTime;
  let result = {}
  for (let index = 1; index <= disksNumber - 1; index++) {
    tempTurns = tempTurns * 2 + 1
  }
  result.turns = tempTurns
  tempTime = Math.floor(tempTurns * (3600 / turnsSpeed))
  result.seconds = tempTime
  return result
};