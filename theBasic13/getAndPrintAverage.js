// Get and Print Average
// Analyze an array's values and print the average.
// ex. [3,5,4] prints 4

function average(arr){
  var len = arr.length;
  var sum = 0
  var count = 0;
  for (var i=0; i<len; i++){
    sum += arr[i];
    count++;
  }
  console.log(sum/count);
}

// test cases
var testArr = [3,5,4]; // -> should print 4
var testArr2 = [-7,-17,-21]; // -> should print -15
var testArr3 = [0]; // -> should print 0
var testArr4 = []; // -> should print NaN
console.log("testArr is");
average(testArr);
console.log("testArr2 is");
average(testArr2);
console.log("testArr3 is");
average(testArr3);
console.log("testArr4 is");
average(testArr4);
