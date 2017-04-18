// combine two sorted arrays that can contain duplicates (ordered multisets)
// into one ordered multiset that contains the intersecting values
// ex. given [2,3,3,3,8] and [3,3,7,7,8] return [3,3,8]

function intersectMultisets(mset1, mset2){
	var mset3 = []; // create our empty multiset that'll contain the intersecting values
	len1 = mset1.length; // store the length of the first multiset
	len2 = mset2.length; // store the length of the second multiset
	var idx1 = 0; // set a variable that we'll use to track the index of the first multiset
	var idx2 = 0; // set a variable that we'll use to track the index of the second multiset
	while(idx1 < len1 && idx2 < len2){ // do this until we've completely gone through either of the multisets
		while(mset1[idx1] >= mset2[idx2]){ // if the value at the current index of the first multiset is less than the value at the current index of the second multiset, than it doesn't exist in the second
			if(mset1[idx1] == mset2[idx2]){ // check if the values match
				mset3.push(mset2[idx2]); // if they do then push the value into the 3rd multiset (doesn't matter if we push it from the 1st or 2nd multiset)
				idx2++; // increment the index for the second multiset
				break; // and break out of this inner while loop
			}
			idx2++; // if the check above is false, increment the index for the second multiset and continue through the inner loop
		}
		idx1++; // increment the index for the first multiset
	} // at this point we've completely gone through at least one of the multisets so there can't be anymore intersecting values
	return mset3; // so return the intersected multiset
}

// test cases
console.log(intersectMultisets([2,3,3,3,8],[3,3,7,7,8])); // => [3,3,8]
console.log(intersectMultisets([],[])); // => []
console.log(intersectMultisets([],[1,2,3,4])); // => []
console.log(intersectMultisets([1,2,3,4],[])); // => []
console.log(intersectMultisets([1,2,3,4],[1])); // => [1]
console.log(intersectMultisets([1,2,3,4],[3,5,6,7,8,9,10])); // => [3]
console.log(intersectMultisets([1,2,3,4,5,6,7,8,9,10],[3])); // => [3]