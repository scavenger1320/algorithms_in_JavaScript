// function that sorts a given array using recursive Merge Sort
function arrayMergeSort(arr){
	if(arr.length < 2){ // base case = if array only has one value, then by definition its sorted
		return arr; 
	}
	var mid = arr.length/2; // create a mid(dle) index where we'll slice our array in half
	var left = arr.slice(0, mid); // create the left side of the array
	var right = arr.slice(mid, arr.length); // create the right side of the array
	return merge(arrayMergeSort(left), arrayMergeSort(right)); // merge whatever is recursively returned arrayMergeSort of each half of the split array
}
function merge(left, right){ // this is the merge function invoked on line 9 which takes in 2 sorted arrays
	var result = []; // this is where we'll store our sorted array as we merge
	while(left.length && right.length){ // do this while there are values in both arrays
		if(left[0] <= right[0]){ // check the first value of each array to see which one is lesser
			result.push(left.shift()); // and push that lesser value into the result array
		} // the .shift function shifts array values to the left, removing and returning whatever value was at the 0 index
		else{
			result.push(right.shift());
		}
	} // if one of the arrays are longer and the shorter one runs out of values (meaning that first while loop is false and exits)
	while(left.length){ // then that remaining array will go into its own while loop
		result.push(left.shift()); // that pushes the rest of the values into the result array
	}
	while(right.length){
		result.push(right.shift());
	}
	return result; // and return this newly merged and fully sorted array
}

// test cases for array merge sort
console.log(arrayMergeSort([8,3,2,6,1,9])); // => [ 1, 2, 3, 6, 8, 9 ]
console.log(arrayMergeSort([1,2,3,4,5,6])); // => [ 1, 2, 3, 4, 5, 6 ]
console.log(arrayMergeSort([6,5,4,3,2,1])); // => [ 1, 2, 3, 4, 5, 6 ]
console.log(arrayMergeSort([])); // => []
console.log(arrayMergeSort([8])); // => [ 8 ]