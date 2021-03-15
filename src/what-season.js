const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let getMonth;

  try {
    if (date === undefined) {
      return 'Unable to determine the time of year!'
    }
    if (date.getMonth() === null) {
      return `Error`
    }
  let test = Object.keys(date)
  test.forEach(element => {
    if (element === `getMonth`) {
      throw `Error`
    }
  });

    getMonth = date.getMonth()
    if (getMonth === 11 || getMonth === 0 || getMonth === 1) {
      return `winter`
    }else if (getMonth === 2 || getMonth === 3 || getMonth === 4) {
      return `spring`
    }else if (getMonth === 5 || getMonth ===  6|| getMonth === 7) {
      return `summer`
    }else if (getMonth === 8 || getMonth === 9 || getMonth === 10) {
      return `autumn`
    }
  } catch (error) {
    throw `Error`
  }
};