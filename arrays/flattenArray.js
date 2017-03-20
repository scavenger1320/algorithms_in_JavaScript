// Function that flattens an array (NON-recursively)
// ex. given [1,2,[3,4,5],6] return [1,2,3,4,5,6]
// these versions will only work if there's only 1 level of nested arrays
// so given [1,[2,[3,4]]] it would only return [1,2,[3,4]]

// this method creates a new array
function flattenArrNew(arr){
	var len = arr.length;
	var newArr = [];
	for(var i=0;i<len;i++){
		if(typeof(arr[i]) != 'number'){
			for(var j=0;j<arr[i].length;j++){
				newArr.push(arr[i][j])
			}
		}
		else{
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

// this method is in-place (modifies the original array)
// it is also stable (retaining original order)
function flattenArrSame(arr){
	var len = arr.length;
	for(var i=0;i<len;i++){
		if(typeof(arr[i]) != 'number'){
			for(var j=0;j<arr[i].length;j++){
				arr.push(arr[i][j]);
			}
		}
		else{
			arr.push(arr[i]);
		}
	}
	arr.splice(0,len);
	return arr;
}

// test cases
var testArr = [1,[2,3],4,[5],[6,7,8],[]]; //should output [1,2,3,4,5,6,7,8]
console.log(flattenArrNew(testArr));
console.log(flattenArrSame(testArr));
