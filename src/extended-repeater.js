const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  let res = '';
  let substr = '';
  if (options === undefined) {
    return str;
    } else {
      if (!(options.hasOwnProperty('repeatTimes')))   {
        return str;
      }
      if (options.repeatTimes === undefined) {options.repeatTimes = 1;}
      if (!(options.hasOwnProperty('additionRepeatTimes'))) {options.additionRepeatTimes = 1;}
      if (options.additionRepeatTimes === undefined) {options.additionRepeatTimes = 1;}
      if (!(options.hasOwnProperty('addition'))) {options.addition = '';}
      if (!(options.hasOwnProperty('separator'))) {options.separator = '+';}
      if (!(options.hasOwnProperty('additionSeparator'))) {options.additionSeparator = '|';}
    }
    //res = `${str}${(options.addition + options.additionSeparator).repeat(options.additionRepeatTimes)}${options.separator}`.repeat(options.repeatTimes);
    for (let i = 1; i <= options.additionRepeatTimes; i++ ) {
      if (i < options.additionRepeatTimes ) {
        substr = `${substr}${options.addition}${options.additionSeparator}`;
      } else {        
        substr = `${substr}${options.addition}`;
      }
    }
    for (let i = 1; i <= options.repeatTimes; i++ ) {
      if (i < options.repeatTimes ) {
        res = `${res}${str}${substr}${options.separator}`;
      } else {
        res = `${res}${str}${substr}`;
      }
    }
    return res;
};
