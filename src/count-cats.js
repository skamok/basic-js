const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  if (arr.length === 0) return 0;
  let arr1 = arr.reduce(function(a, b) {
    return a.concat(b);
  });
  let str = arr1.reduce(function(previousValue, currentValue, index, array) {
     if (currentValue === '^^') {return previousValue + currentValue;} else 
     {return previousValue}
  },''); 
  return (str.length/2);
};
