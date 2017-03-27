// Print Odds 1 - 255
// Print all odd integers from 1 to 255.

// Note: the for loop increments by two (i+=2), not by one (i++)
function printOdds(){
  for (var i=1; i<=255; i+=2){
    console.log(i);
  }
}

// Note: the modulus operator (%) is 'expensive' for computers to perform
// so oddArray2() is inferior to oddArray()
function printOdds2(){
  for (var i=1; i<=255; i++){
    if (i%2 === 1){
      console.log(i);
    }
  }
}

// test cases
printOdds();
printOdds2();
