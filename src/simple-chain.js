const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr : [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    //console.log('addlink='+ value);
    if (value === undefined) {
      this.arr.push(' ');
    } else {
      this.arr.push(`${value}`);
    } 
    //console.log('ADDarr='+this.arr );   
    return this;
  },
  removeLink(position) {
    //console.log('removeLink='+ value);
    if ( (typeof(position) !== 'number' ) || (position < 1) || (position > this.arr.length) ) {this.arr = []; throw Error('Error');};
    this.arr.splice(position-1, 1);
    //console.log('REMarr='+this.arr );
    return this;
  },
  reverseChain() {
    if (this.arr.length> 1) this.arr.reverse();
    //console.log('REVarr='+this.arr );
    return this;
  },
  finishChain() {
    //console.log('Finish='+this.arr );
    let str = '';
    if (this.arr.length === 0) { str = ''}
     else {
    this.arr.forEach((el, ind, arr) => {
      if (arr.length === 0) { this.arr = []; str = '';}
      if ((ind === 0) || (ind < (arr.length-1))) 
        { if (arr.length ===1 ) {str = `${str}( ${el} )`} else { str = `${str}( ${el} )~~`} }
        else
        {str = `${str}( ${el} )`}
    });
  }
    this.arr = [];
    return str;
  }
};


module.exports = chainMaker;
