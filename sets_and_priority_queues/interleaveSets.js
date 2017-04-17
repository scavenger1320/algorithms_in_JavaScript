// given 2 unsorted arrays, create a 3rd with the values of the 2 given interleaved
// once one of the arrays is exhausted just add on the remaining values of the other
// ex. given [1,3,5,7,9,11] and [2,4,6] => [1,2,3,4,5,6,9,11]

function interleave(arr1,arr2){
	len1 = arr1.length;
	len2 = arr2.length;
	arr3 = [];
	while(len1 && len2){
		arr3.push(arr1.shift());
		arr3.push(arr2.shift());
		len1--;
		len2--;
	}
	while(len1){
		arr3.push(arr1.shift());
		len1--;
	}
	while(len2){
		arr3.push(arr2.shift());
		len2--;
	}
	return arr3;
}


// test cases
// var array1 = [1,3,5,7,9,11];
// var array2 = [2,4,6];
console.log(interleave([1,3,5,7,9,11], [2,4,6])); // => [1,2,3,4,5,6,9,11]
console.log(interleave([],[])); // => []
console.log(interleave([],[2,4,6])); // => [2,4,6]
console.log(interleave([1,3,5],[])); // => [1,3,5]