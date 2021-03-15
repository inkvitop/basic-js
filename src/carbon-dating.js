const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  let sActivity = Number(sampleActivity)
  if (typeof(sampleActivity) !== `string` || sampleActivity === undefined || /[^\d\.]/.test(sampleActivity) || sampleActivity.length === 0 || sActivity < 0 || sActivity === 0 || sActivity >= 15) {
    return false
  }
  let resultI = Math.log2(MODERN_ACTIVITY/sActivity) * HALF_LIFE_PERIOD
  // console.log(resultI)
  let resultII = Math.ceil(resultI)
  return resultII
};