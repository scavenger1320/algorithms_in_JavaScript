//get the product of all integers from 1 up to specified value
function rFactorial(num){
	if(num <= 0 || num == 1){ // this is the base case
		return 1;             // if negative value passed in we simply return 1
	}
	return rFactorial(num - 1) * num; // this is making forward progress
}


// ======================================================================
// Code below exports this functions for Mocha testing
if( typeof exports !== 'undefined') {
	exports.rFactorial = rFactorial;
}