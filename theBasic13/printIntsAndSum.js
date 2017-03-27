// Print Ints and Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far.

function sumAndPrint(){
  var sum = 0;
  for (var i=1; i<=255; i++){
    sum += i;
    console.log('Current integer: ' + i + '. Running sum: ' + sum + '.');
  }
}

// test cases
sumAndPrint()
