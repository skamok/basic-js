const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  let arr = [];
  if (!Array.isArray(members)) {return false};
  if (members.length === 0) {return false};
  arr = members.map(function (val) {
    let re = /([A-Za-z])/;
    if (typeof(val) !== 'string') {return ''};
    let str = '';
    //str = val.trim()[0].toUpperCase(); // don't solve case witn number in string      
    str = val.match(re);
    if (str !== null) {return str[0].toUpperCase()} else {return ''};
  });
  return arr.sort().join(''); 
};
