// write standalone functions implementing insertion sort for arrays
function arrayInsertionSort(arr){ // pass in the array to be sorted
	var len = arr.length; // store the length of the array in a variable to use later
	for(var i=1;i<len;i++){ // iterate the array starting i at 1 because the first value is automatically considered sorted, and as we go through, left of 'i' will be sorted
		if(arr[i]<arr[i-1]){ // check if the value at the current index is less than the previous, which means this value needs to be inserted into it's proper place in the sorted portion
			var temp = arr[i]; // store this current value in a temp variable
			var idx; // declare an index variable that we'll use to track where the above value needs to be inserted
			for(var k=i-1;k>=0;k--){ // loop backwards through the sorted portion of the array to locate where the insertion needs to take place
				if(temp<arr[k]){ // check if the temp value (the out of place one) is less than the value we're looking at in the sorted portion
					arr[k+1]=arr[k]; // if it is, then we just need to shift that sorted value to the right by one
					idx = k; // and set idx to the spot we just shifted
				}
				else{ // else we've come to where our out of place value needs to go
					break; // so break out of this loop to stop it from continuing to check the previous values for no reason
				}
			}
			arr[idx]=temp; // and insert that out of place value where it belongs
		}
	}
	return arr;
}

// test cases for array insertion sort
console.log(arrayInsertionSort([8,3,2,6,1,9]));
console.log(arrayInsertionSort([1,2,3,4,5,6]));
console.log(arrayInsertionSort([6,5,4,3,2,1]));
console.log(arrayInsertionSort([6,2,9,5,7,4,1,8,3,11,10]));
console.log(arrayInsertionSort([]));
console.log(arrayInsertionSort([8]));