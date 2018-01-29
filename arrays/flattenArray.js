// Function that flattens an array (NON-recursively)
// ex. given [1,2,[3,4,5],6] return [1,2,3,4,5,6]
// these versions will only work if there's only 1 level of nested arrays
// so given [1,[2,[3,4]]] it would only return [1,2,[3,4]]

// this method creates a new array
function flattenArrNew(arr){
	var len = arr.length; // store the length of the array
	var newArr = []; // create our new array
	for(var i=0;i<len;i++){ // iterate through the array
		if(typeof(arr[i]) != 'number'){ // check if value at current index isn't a number
			for(var j=0;j<arr[i].length;j++){ // if not a number we assume it's an array and iterate through it
				newArr.push(arr[i][j]) // push each inner value to the new array
			}
		}
		else{ // the value at the current index is a number (not an array)
			newArr.push(arr[i]); // therefore push the number to the new array
		}
	}
	return newArr;
}

// this method is in-place (modifies the original array)
// it is also stable (retaining original order)
function flattenArrSame(arr){
	var len = arr.length; // store the length of the array
	for(var i=0;i<len;i++){ // iterate through the array
		if(typeof(arr[i]) != 'number'){ // check to see if it's not a number, 
			for(var j=0;j<arr[i].length;j++){ // and assume it's an array that we now iterate through
				arr.push(arr[i][j]); // and push the inner values to the end of the original array
			}
		}
		else{ // the value is a number
			arr.push(arr[i]); // so we push it to the end of the original array
		}
	}
	arr.splice(0,len); //since we pushed values to the end of the original array, we just splice off what was the original array
	return arr; // and return the original array that has now been flattened
}




// ======================================================================
// Code below exports this file for Mocha testing
if (typeof exports !== 'undefined') {
	exports.flattenArrNew = flattenArrNew;
	exports.flattenArrSame = flattenArrSame;
}
