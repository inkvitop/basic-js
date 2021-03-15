const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let firstSimbolString = ``;
  let removeSpace = ``;
  let tempArr = []

  try {
    members.forEach(element => {
      if (typeof(element) != `string`) {
        return false
      }
      removeSpace = element.replace(/\s+/g, ' ').trim().toUpperCase()
      removeSpace.substring(0,1);
      tempArr.push(removeSpace)
    })
    tempArr.sort()
    tempArr.forEach(element => {
    firstSimbolString += element.substring(0,1).toUpperCase();
    });
    return firstSimbolString
  } catch (error) {
    return false
  }
};