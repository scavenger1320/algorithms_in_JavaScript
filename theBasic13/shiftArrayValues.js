// Shift Array Values
// Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end.
// ex. [4,5,6,7] becomes [5,6,7,0]

function shiftArray(arr){
  var len = arr.length - 1;  // note, len is set to one less than the array length
  for (var i=0; i<len; i++){  // for loop will move through the array from the first position (index 0) to the second to last position (index arr.length-2)
    arr[i] = arr[i+1];  // assign the value of the next location to the current location
  }
  arr[len] = 0;  // the last value, which is located at index arr.length - 1, is set to zero
  return arr;
}

// test cases
var testArr = [4,5,6,7]; // -> returns [4,6,7,0]
var testArr2 = [-7,-17,-21,0]; // -> returns [-17, -21, 0, 0]
var testArr3 = [0]; // -> returns [0]
var testArr4 = [1]; // -> returns [0]
console.log("testArr is", shiftArray(testArr));
console.log("testArr2 is", shiftArray(testArr2));
console.log("testArr3 is", shiftArray(testArr3));
console.log("testArr4 is", shiftArray(testArr4));
