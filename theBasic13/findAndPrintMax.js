// Find and Print Max
// Given an array, find and print its largest element.
// ex. [1,5,4] prints 5

function max(arr){
  var len = arr.length;
  var max = arr[0];
  for (var i=0; i<len; i++){
    if (max < arr[i]){
      max = arr[i];
    }
  }
  console.log(max);
}

// test cases
var testArr = [1,5,4]; // -> should print 5
var testArr2 = [-7,-12,-21]; // -> should print -7
var testArr3 = [0]; // -> should print 0
var testArr4 = []; // -> should print undefined
console.log("testArr is", max(testArr));
console.log("testArr2 is", max(testArr2));
console.log("testArr3 is", max(testArr3));
console.log("testArr4 is", max(testArr4));
