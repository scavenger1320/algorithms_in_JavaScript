// Iterate and Print Array
// Iterate through a given array, printing each value.

function printArray(arr){
  var len = arr.length;
  for (var i=0; i<len; i++){
    console.log(arr[i]);
  }
}

// test cases
testCase = [1,2,3,4,5]; // -> should print 1 2 3 4 5
testCase2 = ['abc', 'xyz', 17, '38']; // -> should print abc xyz 17 38
testCase3 = []; // -> should print nothing
testCase4 = ['hello', ['nested array', 10, 11], 55]; // -> should print hello ['nested array', 10, 11] 55

console.log("testCase is");
printArray(testCase);
console.log("testCase2 is");
printArray(testCase2);
console.log("testCase3 is");
printArray(testCase3);
console.log("testCase4 is");
printArray(testCase4);
