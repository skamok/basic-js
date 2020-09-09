const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  let trys = Math.pow(2, disksNumber)-1
  return {turns : trys, seconds : Math.floor((trys*3600)/turnsSpeed)};
};
