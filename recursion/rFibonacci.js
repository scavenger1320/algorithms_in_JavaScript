//get the fibonacci value at the (num)th position
function rfibonacci(num){
	if(num == 0 || num == 1){  // this is the base case
		return num;
	}
	return rfibonacci(num - 2) + rfibonacci(num - 1); // this makes forward progress
}


// ======================================================================
// Code below exports this functions for Mocha testing
if (typeof exports !== 'undefined') {
	exports.rfibonacci = rfibonacci;
}