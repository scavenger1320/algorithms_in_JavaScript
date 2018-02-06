//  given a number, return the sum of all integers incremented by one up to the number
//  ex. given 5 return 15 (1+2+3+4+5 = 15)
//  if given a negative number just return 0

function rSigma(num){
	if(num < 1){    // this is the base case
		return 0;   // this also handles negative numbers
	}
	else{
		return num + rSigma(num - 1);  // this is making forward progress
	}
}

// ======================================================================
// Code below exports this functions for Mocha testing
if (typeof exports !== 'undefined') {
	exports.rSigma = rSigma;
}