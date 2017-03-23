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


// test cases
var testArr = [1,2,3,4,10]; // -> true (1+2+3+4 =10 / 10)
var testArr2 = []; // should this return true or false? Good question to ask
// an interviewer since technically it does balance out
// however, the question asks for a balance point BETWEEN indices
// since there's no indices to be between, then this should probably return false
// remove the '&& len' in the while condition to make it return true for this case
var testArr3 = [1,2,3,20]; // -> false
var testArr4 = [-4,20,3,5,8]; // -> true (-4+20 = 16 / 3+5+8 = 16)
var testArr5 = [11,1,2,3,5]; // -> true (11 / 1+2+3+5 = 11)
console.log("testArr is", balancePoint(testArr));
console.log("testArr2 is", balancePoint(testArr2));
console.log("testArr3 is", balancePoint(testArr3));
console.log("testArr4 is", balancePoint(testArr4));
console.log("testArr5 is", balancePoint(testArr5));






