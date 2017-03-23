// function that removes duplicate values from an array
// ex. [1,2,1,1,3,4,4,4,3] returns [1,2,3,4]

// this method creates a new array
function dedupeNew(arr){
	var len = arr.length; // store the length of the given array
	var newArr = []; // create the new array object
	for(var i=0;i<len;i++){ // iterate through the given array
		var newLen = newArr.length; // store the length of the new array
		for(var j=0;j<newLen;j++){ // iterate through the new array
			if(arr[i] == newArr[j]){ // check if the value at 'i' equals any of the values in the new array
				break; // if it does then its a duplicate and we can break out of this loop
			}
		}
		if(j == newLen){ // if j (index we track of the new array) equals the length, then that means we iterated all the way through it and never 'broke'
			newArr.push(arr[i]); // which means it didn't exist in the new array so we push the given array value into it
		}
	}
	return newArr;
}

// this method is in-place (alters original array)
// also is stable (retains original order)
function dedupeSame(arr){
	var len = arr.length; // store the length of the array
	for(var i=0;i<len;i++){ // iterate through it
		var duplicate = false; // start off assuming value is NOT a duplicate
		for(var j=0;j<i;j++){ // iterate through the previous values in the array
			if(arr[i] == arr[j]){ // if the value we're at equals any of the previous values 
				duplicate = true; // then it's a duplicate so set it to True
				break; // we know its a duplicate now so no need to continue this inner loop
			}
		}
		if(duplicate == false){
			arr.push(arr[i]); // if duplicate is still set at false then push this value to the end of the array
		}
	}
	arr.splice(0,len); // chop off what was the original array leaving behind the values that we pushed to the end
	return arr;
}

// this method does away with the inner loop
function dedupeOneLoop(arr){
	var len = arr.length; // store the length of the array
	var unique = {}; // create an empty object
	for(var i=0;i<len;i++){ // iterate through the array
		if(!unique[arr[i]]){ // check if the unique object contains a key that matches the current value in the array
			unique[arr[i]] = 1; // if it doesn't, we create a key in the object that is the value (the 1 we assign as the value to the key is arbitrary and doesn't matter)
			arr.push(arr[i]); // since the value didn't exist as a key, therefore wasn't a duplicate, we push it to the end of the array
		}
	}
	arr.splice(0,len); // chop off what was the original array leaving behind the values we pushed to the end
	return arr;
}

// test cases
var testArr = [1,2,3,1,5,2,2,4,3];
var testArr2 = [1,1,1,1,6,2,2,3,3,5,5,4,2,4,2,1]
console.log(dedupeNew(testArr));
console.log(dedupeSame(testArr));
console.log(dedupeOneLoop(testArr2));



