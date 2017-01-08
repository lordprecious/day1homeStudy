'use strict'

var file = {}

file.dataTypes = function(data) {

    if(typeof data == 'string')  {
        return data.length;
    }
    else if ((data === null) || (data === undefined )) {

        return 'no value';

    }
    else if (typeof data === 'boolean') {
        return data;
    }

    else if (typeof data == 'number') {
        if(data < 100){
            return 'less than 100';
        }
        else if (data > 100) {
            return 'more than 100';
        }
        else {
            return 'equal to 100';
        }
    }



    else if (Array.isArray(data)) {
        if(data.length > 2){
          if(data[2] === undefined || data[2] === null) {
            return 'no value';
          } else {
            return data[2];
          }
            
        }
        else {
            return undefined;
        }
        
    }

    
 else if (typeof data == 'function') {
        return data(true);
    }

}

file.getPrimes = function(num) {
  if(num < 2){
    //console.log("prime number starts from 2");
    return "prime number starts from 2";
  }
  var primeNumbers = [];

  for(var i = 2; i <= num; i++) {
    var isPrime = true;
    for(var j = 2; j < i; j++) {
      if(i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if(isPrime === true) {
      primeNumbers.push(i);
    }

  }
  return primeNumbers;
}

module.exports = file;