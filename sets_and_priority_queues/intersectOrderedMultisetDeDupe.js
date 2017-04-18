// combine two sorted arrays that can contain duplicates (ordered multisets)
// into one ordered set that contains the intersecting values (as this is a set it can't contain duplicates)
// ex. given [2,3,3,3,8] and [3,3,7,7,8] return [3,8]

function intersectMultisetsDeDupe(mset1, mset2){
	var set = []; // create our empty set that'll contain the intersecting values
	len1 = mset1.length; // store the length of the first multiset
	len2 = mset2.length; // store the length of the second multiset
	var idx1 = 0; // set a variable that we'll use to track the index of the first multiset
	var idx2 = 0; // set a variable that we'll use to track the index of the second multiset
	while(idx1 < len1 && idx2 < len2){ // do this until we've completely gone through either of the multisets
		while(mset1[idx1] >= mset2[idx2]){ // if the value at the current index of the first multiset is less than the value at the current index of the second multiset, than it doesn't exist in the second
			if(mset1[idx1] == mset2[idx2] && mset1[idx1] != set[set.length-1]){ // check if the values match and that it hasn't already been pushed into the new set
				set.push(mset2[idx2]); // if they do then push the value into the new set (doesn't matter if we push it from the 1st or 2nd multiset)
			}
			idx2++; // increment the index for the second multiset and continue through the inner loop
		} // because our inner while loop checks while the values are equal, it'll keep going through the duplicates too so that we can get past them
		idx1++; // increment the index for the first multiset
	} // at this point we've completely gone through at least one of the multisets so there can't be anymore intersecting values
	return set; // so return the intersected set
}

// test cases
console.log(intersectMultisetsDeDupe([2,3,3,3,8],[3,3,7,7,8])); // => [3,8]
console.log(intersectMultisetsDeDupe([],[])); // => []
console.log(intersectMultisetsDeDupe([],[1,2,3,4])); // => []
console.log(intersectMultisetsDeDupe([1,2,3,4],[])); // => []
console.log(intersectMultisetsDeDupe([1,2,3,4],[1])); // => [1]
console.log(intersectMultisetsDeDupe([1,2,3,4],[3,5,6,7,8,9,10])); // => [3]
console.log(intersectMultisetsDeDupe([1,2,3,4,5,6,7,8,9,10],[3])); // => [3]
console.log(intersectMultisetsDeDupe([1,1,1,1,2,2,2,2,3,3,4,4,4],[1,1,1,2,2,2,3,3,3,3,3,4,4])); // => [1,2,3,4]