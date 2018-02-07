//get the tribonacci value at the (num)th position
// Trib is just like fibonacci except each value is the sum of the previous three
function rtribonacci(num){
	if(num < 2){  // this is one possible base case
		return 0;
	}
	else if(num == 2){  // this is the other possible base case, essentially seeding the first 3 values
		return 1;
	}
	return rtribonacci(num-3) + rtribonacci(num - 2) + rtribonacci(num - 1); // this makes forward progress
}

// sample tribonacci sequence
// sequence follows standard array indexing so tribonacci of 0 is the first value
// [0,0,1,1,2,4,7,13,24,44]


// ======================================================================
// Code below exports this functions for Mocha testing
if (typeof exports !== 'undefined') {
	exports.rTribonacci = rtribonacci;
}