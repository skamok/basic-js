const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !== 'string')  {return false};
  if (isNaN(Number.parseFloat(sampleActivity)))  {return false};
  //if (parseFloat(sampleActivity).toString().length !== sampleActivity.length) {return false};
  if ((sampleActivity > 15) || (sampleActivity <= 0)) {return false};
  return ( Math.ceil((Math.log(MODERN_ACTIVITY/Number.parseFloat(sampleActivity))) / (0.693/HALF_LIFE_PERIOD)) );
};
