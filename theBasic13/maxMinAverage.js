// Max, Min, Average
// Given an array, print the max, min, and average values for that array.
// ex. for [3,15,99,0,4] the max is 99, the min is 0, and the average is 24.2

function maxMinAverage(arr){
  var len = arr.length;
  var max = arr[0];
  var min = arr[0];
  var sum = 0
  var count = 0;
  for (var i=0; i<len; i++){
    if (min > arr[i]){
      min = arr[i];
    }
    if (max < arr[i]){
      max = arr[i];
    }
    sum += arr[i];
    count++;
  }
  console.log(max, min, sum/count);
}

// test cases
var testArr = [3,15,99,0,4]; // -> should print 99 0 24.2
var testArr2 = [-7,-17,-21,-88]; // -> should print -7 -88 -33.25
var testArr3 = [0]; // -> should print 0 0 0
var testArr4 = []; // -> should print undefined undefined NaN
console.log("testArr is");
maxMinAverage(testArr);
console.log("testArr2 is");
maxMinAverage(testArr2);
console.log("testArr3 is");
maxMinAverage(testArr3);
console.log("testArr4 is");
maxMinAverage(testArr4);
