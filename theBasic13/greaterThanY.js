// Greater than Y
// Given an array and a value Y, count and print the number of array values greater than Y.
// ex. arr=[1, 3, 5] and Y=2 should count 2

function greaterThan(arr, Y){
  var len = arr.length;
  var count = 0;
  for (var i=0; i<len; i++){
    if (arr[i]>Y){
      count++;
    }
  }
  console.log(count);
}

// test cases
console.log("testCase is");
greaterThan([3,5,4], 0); // -> should print 3
console.log("testCase2 is");
greaterThan([-7,-17,-21], -18); // -> should print 2
console.log("testCase3 is");
greaterThan([1], 2); // -> should print 0
console.log("testCase4 is");
greaterThan([], 0); // -> should print 0
