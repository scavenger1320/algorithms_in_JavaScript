// given a string which only contains a 0,1, or ? return an array 
// with every possibly combination of 0's and 1's only in place of ?
// ex. given '0?1' return ['001', '011']
function binaryStringExpansion(str,arr){ // we need to pass in the array as we build it with the different combinations
	if(!arr){  // this array won't exist the first time we call this function so we need to create it
		arr=[];
	}
	var first = str.split("?",1)[0]; // split off the first section of the string up to the first '?' found
	var second = str.slice(first.length+1); // split off the second section of the string after the first '?' found
	if(first.length == str.length){ // if these equal, that means the string never split because there were no '?'
		arr.push(str); // this is the base case so we push this string into the array
	}
	else{ // this means there was a '?' so we need to call this function again
		binaryStringExpansion(first + 0 + second, arr); // this time with a 0 in the place of the first '?' found
		binaryStringExpansion(first + 1 + second, arr); // and this one with a 1 in the place of the first '?' found
	}
	return arr;
}

// ======================================================================
// Code below exports this file for Mocha testing
if (typeof exports !== 'undefined') {
	exports.rBinaryStringExpansion = binaryStringExpansion;
}