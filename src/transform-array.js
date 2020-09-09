const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  if (Object.prototype.toString.call(arr) !== '[object Array]') {throw new Error('Error');}
  if (arr.length === 0) {return [];}
  let res = [];
  let i = 0;

while (i< arr.length)
{ switch (arr[i]) {
   case '--double-next' : if (i < (arr.length-1)) {res.push(arr[i+1])};
    break;
   case '--double-prev' : if (res.length>0) {res.push(res[res.length-1])};
    break;
   case '--discard-next' : res.push('del'); i++;
    break;
   case '--discard-prev' : if (res.length>0) {res.pop()};
    break;
   default : res.push(arr[i]);
  }
  i++;
};
   return res.filter(word => word !== 'del');


};
