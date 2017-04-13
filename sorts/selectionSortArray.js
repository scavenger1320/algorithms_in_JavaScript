// write a standalone function implementing selection sort for arrays
function arraySelectionSort(arr){ // pass in the array to be sorted
	var len = arr.length; // store the length of the array in a variable to use later
	var min; // declare our min variable that we'll use to select the minimum value through each pass of the array
	var idx; // declare our index variable that we'll use to move values around
	for(var i=0;i<len;i++){ // start our first loop that iterates through the array(the sorted portion will be to the left of i)
		min = arr[i]; // set min as the first value within each iteration
		idx = i; // set idx to the first index within each iteration, which is where the minimum value is located at this point
		for(var k=i+1;k<len;k++){ // start our second loop which will iterate through the remainder of the array to find our minimum
			if(arr[k]<min){ // do our check to see if the value where we are is a new minimum
				min = arr[k]; // if it is, then reset min
				idx = k; // and set idx to the new min's index
			}
		} // now we've gone through the right side of i in the array and have 'selected' the minimum value
		if(idx != i){ // if i and idx are the same then the minimum value is already where it belongs
			var temp = arr[i]; // if it's not, then we swap moving the minimum value to where i is, thus making the left sorted portion one value bigger
			arr[i] = arr[idx];
			arr[idx] = temp;
		}
	}
	return arr;
}

// test cases for array selection sort
console.log(arraySelectionSort([8,3,2,6,1,9]));
console.log(arraySelectionSort([1,2,3,4,5,6]));
console.log(arraySelectionSort([6,5,4,3,2,1]));
console.log(arraySelectionSort([6,2,9,5,7,4,1,8,3,11,10]));
console.log(arraySelectionSort([]));
console.log(arraySelectionSort([8]));
