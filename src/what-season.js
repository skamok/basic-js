const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  let season = '';
  if (arguments[0] === undefined) {return 'Unable to determine the time of year!'};
  if (Object.prototype.toString.call(date) !== '[object Date]') {throw new Error('Error');}
  switch (date.getMonth()+1) {
    case 12:
    case 1:
    case 2:   
        season = 'winter';
        break;
    case 3:
    case 4:
    case 5:   
        season = 'spring';
        break;
    case 6:
    case 7:
    case 8:   
        season = 'summer';
        break;
    case 9:
    case 10:
    case 11:   
        season = 'autumn';
        break
    default:
        season = 'Unable to determine the time of year!';
  }
  return season;
 
};
