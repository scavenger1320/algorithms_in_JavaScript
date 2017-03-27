// Square the values
// Square each value in a given array, returning that same array with changed values.
// ex. [4,5,6,7] returns [16,25,36,49]

function square(arr){
  var len = arr.length;
  for (var i=0; i<len; i++){
    arr[i] *= arr[i];
  }
  return arr;
}

// test cases
var testArr = [4,5,6,7]; // -> returns [16,25,36,49]
var testArr2 = [-7,-17,-21,0]; // -> returns [49,289,441,0]
var testArr3 = [0]; // -> returns [0]
var testArr4 = []; // -> returns []
console.log("testArr is", square(testArr));
console.log("testArr2 is", square(testArr2));
console.log("testArr3 is", square(testArr3));
console.log("testArr4 is", square(testArr4));
