var BST = require('./bstAdd.js'); // we need this file to access our binary search tree class definition
// and also to access the add function so that we can create our test cases

// function to check if binary search tree has any nodes a.k.a. is empty
BST.prototype.isEmpty = function(){
	if(!this.root){  // just check if the root is null
		return true; // if it is then the tree is empty
	}
	else{
		return false; // otherwise root is not null so it's not empty
	}
}

// same function but using ternary
BST.prototype.isEmptyTern = function(){
	return this.root ? false : true;
}



// test cases
var testBST = new BST(); // first we need to create our test tree
console.log(testBST.isEmpty()); // => true
console.log(testBST.isEmptyTern()); // => true
testBST.add(5); // add one leaf to tree
console.log(testBST.isEmpty()); // => false
console.log(testBST.isEmptyTern()); // => false
testBST.add(3).add(7).add(4).add(6); // and then add some more leaves to it
console.log(testBST.isEmpty()); // => false
console.log(testBST.isEmptyTern()); // => false