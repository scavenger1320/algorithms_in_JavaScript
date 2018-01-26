// given an array, determine if it has a balance point between indices
// where the sum of values on either side are equal
// ex. [1,2,3,4,10] returns true (1+2+3+4 =10 / 10)
// ex. [1,2,8] returns false
function balancePoint(arr){
	var len = arr.length; // store the length of the array
	var rightStart = len-1 // this will track the index where we start summing up the right side
	var leftSum = 0; 
	var rightSum = 0;
	while(rightStart && len){ // this'll keep checking the 2 sides until the rightStart index gets to 0
		for(var i=0;i<len;i++){ // iterate through array to get sums of each side
			if(i<rightStart){      // this adds up the left side
				leftSum += arr[i];
			}
			else{     // we've reached the rightStart index and add up the right side
				rightSum += arr[i];
			}
			// the above if/else can be written in ternary also
			// i<rightStart ? leftSum+=arr[i]:rightSum+=arr[i];
		}
		if(leftSum == rightSum){ // we've added up all the values, now check the sums
			return true; // if the sums equal then we have a balance point
		}
		else{  // the sums didn't equal
			rightStart--; // move the rightStart index to the left by one
			leftSum = 0; // reset the sums
			rightSum = 0;
		}
	}
	return false; // once rightStart gets to index 0 there is no left side to balance with anymore
}



// ======================================================================
// Code below exports this file for Mocha testing
if (typeof exports !== 'undefined') {
	exports.balancePoint = balancePoint;
}






