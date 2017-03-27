// Array with Odds
// Create an array with all the odd integer between 1 and 255 (inclusive).

// Note: the for loop increments by two (i+=2), not by one (i++)
function oddArray(){
  var arr = [];
  for (var i=1; i<=255; i+=2){
    arr.push(i);
  }
  return arr;
}

// Note: the modulus operator (%) is 'expensive' for computers to perform
// so oddArray2() is inferior to oddArray()
function oddArray2(){
  var arr = [];
  for (var i=1; i<=255; i++){
    if (i%2 === 1){
      arr.push(i);
    }
  }
  return arr;
}

// test cases
console.log("oddArray() is", oddArray());
console.log("oddArray2() is", oddArray2()); 
