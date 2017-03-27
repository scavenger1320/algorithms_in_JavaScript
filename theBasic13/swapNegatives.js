// Swap String For Array Negative Values
// Given an array of numbers, replace any negative values with the string 'Dojo'.
// ex. [4,5,-6,7] returns [4,5,'Dojo',7]

function swapNegatives(arr){
  var len = arr.length;
  for (var i=0; i<len; i++){
    if (arr[i]<0){
      arr[i] = 'Dojo';
    }
  }
  return arr;
}

// test cases
var testArr = [4,5,-6,7]; // -> returns [4,5,'Dojo',7]
var testArr2 = [-7,-17,-21,0]; // -> returns ['Dojo','Dojo','Dojo',0]
var testArr3 = [0]; // -> returns [0]
var testArr4 = []; // -> returns []
var testArr5 = [-101, 'Ninja']; // -> returns ['Dojo','Ninja']
console.log("testArr is", swapNegatives(testArr));
console.log("testArr2 is", swapNegatives(testArr2));
console.log("testArr3 is", swapNegatives(testArr3));
console.log("testArr4 is", swapNegatives(testArr4));
console.log("testArr5 is", swapNegatives(testArr5));
