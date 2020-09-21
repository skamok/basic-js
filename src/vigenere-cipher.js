const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
constructor(mode) {
        if (mode === undefined) { 
          this.mode = true;} else {
            this.mode = mode; 
          }
        }
    encrypt(message, key) {
    //throw new CustomError('Not implemented');
    let k = 0;    
    let shifr = '';
    let res = 0;   
    message = message.toUpperCase(); 
    key = key.toUpperCase();
    for (let i = 0; i < message.length; i++) {      
      if (k>(key.length-1)) {k = 0;};
      if (message[i].search(/[A-Za-z]/) === -1) {        
        shifr = shifr + message[i];
      } else {        
        res = ((key.charCodeAt(k) + message.charCodeAt(i)) % 26) + 65;        
        shifr = shifr + String.fromCharCode(res);
        //console.log('message='+message.charCodeAt(i)+' key='+key.charCodeAt(k)+' res='+res+' reslit='+String.fromCharCode(res));
        k++;
      }
    }
    if (this.mode === true) {
      return(shifr);} else {
        return(shifr.split('').reverse().join(''));
      }
  }  

  decrypt(message, key) {
    //throw new CustomError('Not implemented');
    let k = 0;    
    let shifr = '';
    let res = 0;   
    message = message.toUpperCase(); 
    key = key.toUpperCase();
    for (let i = 0; i < message.length; i++) {      
      if (k>(key.length-1)) {k = 0;};
      if (message[i].search(/[A-Za-z]/) === -1) {        
        shifr = shifr + message[i];
      } else {        
        res = ((26 + message.charCodeAt(i) - key.charCodeAt(k)) % 26) +65 ;        
        shifr = shifr + String.fromCharCode(res);
        //console.log('message='+message.charCodeAt(i)+' key='+key.charCodeAt(k)+' res='+res+' reslit='+String.fromCharCode(res));
        k++;
      }
    }
    if (this.mode === true) {
      return(shifr);} else {
        return(shifr.split('').reverse().join(''));
      }
  }
}

module.exports = VigenereCipheringMachine;
