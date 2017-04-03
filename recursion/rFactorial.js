//get the product of all integers from 1 up to specified value
function rFactorial(num){
	if(num <= 0 || num == 1){ // this is the base case
		return 1;             // if negative value passed in we simply return 1
	}
	return rFactorial(num - 1) * num; // this is making forward progress
}


// test cases
var fac = rFactorial(1);
console.log(fac);
var fac2 = rFactorial(3);
console.log(fac2);
var fac3 = rFactorial(6);
console.log(fac3);