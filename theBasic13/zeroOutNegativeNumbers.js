// Zero Out Negative Numbers
// Return the given array, after setting any negative values to zero.
// ex. [4,5,-6,7] returns [4,5,0,7]

function zeroNegatives(arr){
  var len = arr.length;
  for (var i=0; i<len; i++){
    if (arr[i]<0){
      arr[i] = 0;
    }
  }
  return arr;
}

// test cases
var testArr = [4,5,-6,7]; // -> returns [4,5,0,7]
var testArr2 = [-7,-17,-21,0]; // -> returns [0,0,0,0]
var testArr3 = [0]; // -> returns [0]
var testArr4 = []; // -> returns []
var testArr5 = [-101, 'Ninja']; // -> returns [0,'Ninja']
console.log("testArr is", zeroNegatives(testArr));
console.log("testArr2 is", zeroNegatives(testArr2));
console.log("testArr3 is", zeroNegatives(testArr3));
console.log("testArr4 is", zeroNegatives(testArr4));
console.log("testArr5 is", zeroNegatives(testArr5));
