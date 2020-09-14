const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 1; 
        //console.log(arr);     
        //console.log('2' +' '+ ' depth='+depth+' arr='+arr);     
        arr.forEach((element, indexval) => {          
          if (Array.isArray(element)) {                        
            let tmp = this.calculateDepth(element)+1;
            //console.log('3'+' '+ 'tmp='+tmp +' depth='+depth+' element='+element+' indexval='+indexval);
            if (tmp > depth) {depth = tmp};
            } else {          
              //console.log('4'+ ' depth='+depth+' element='+element);              
            }
        });                  
        return depth;      
    }
};
