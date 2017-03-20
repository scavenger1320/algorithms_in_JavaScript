// function that removes duplicate values from an array
// ex. [1,2,1,1,3,4,4,4,3] returns [1,2,3,4]

// this method creates a new array
function dedupeNew(arr){
	var len = arr.length;
	var newArr = [];
	for(var i=0;i<len;i++){
		var newLen = newArr.length;
		for(var j=0;j<newLen;j++){
			if(arr[i] == newArr[j]){
				break;
			}
		}
		if(j == newLen){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

// this method is in-place (alters original array)
// also is stable (retains original order)
function dedupeSame(arr){
	var len = arr.length;
	for(var i=0;i<len;i++){
		var duplicate = false;
		for(var j=0;j<i;j++){
			if(arr[i] == arr[j]){
				duplicate = true;
				break;
			}
		}
		if(duplicate == false){
			arr.push(arr[i]);
		}
	}
	arr.splice(0,len);
	return arr;
}

// this method does away with the inner loop
function dedupeOneLoop(arr){
	var len = arr.length;
	var unique = {};
	for(var i=0;i<len;i++){
		if(!unique[arr[i]]){
			unique[arr[i]] = 1;
			arr.push(arr[i]);
		}
	}
	arr.splice(0,len);
	return arr;
}

// test cases
var testArr = [1,2,3,1,5,2,2,4,3];
var testArr2 = [1,1,1,1,6,2,2,3,3,5,5,4,2,4,2,1]
console.log(dedupeNew(testArr));
console.log(dedupeSame(testArr));
console.log(dedupeOneLoop(testArr2));



