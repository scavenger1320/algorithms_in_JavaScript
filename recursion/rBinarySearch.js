// given a sorted array and a value, see if the array contains that value using binary search
function rBinarySearch(arr,val,start,end){
	if(!start && !end){  // first time this function is called these arguments won't exist so we have to create them
		start = 0;       //  you can think of these variables as bookends
		end = arr.length;
	}
	if(start >= end || val < arr[start] || val > arr[end-1]){
		return false; // negative base case for if we didn't find the value and also checks right away if value is outside of sorted array
	}
	var mid = Math.floor((start+end)/2);  // create the middle index to check against the value
	if(arr[mid] == val){ // positive base case which is if we find the value
		return true;
	}
	else if(val < arr[mid]){ // check to see if value is in the left half 
		end = mid;  // if so, move the end 'bookend' in
	}
	else{
		start = mid+1; // else it's in the right half so move the start 'bookend' forward
	}
	return rBinarySearch(arr,val,start,end); // recursively call the function again
	//  forward progress is made by passing in the adjusted 'bookends'
}

// test cases
var testArr = [2,4,6,8,10];
console.log(rBinarySearch(testArr, 6));
console.log(rBinarySearch(testArr, 2));
console.log(rBinarySearch(testArr, 10));
console.log(rBinarySearch(testArr, 7));
console.log(rBinarySearch(testArr, 1));
console.log(rBinarySearch(testArr, 22));