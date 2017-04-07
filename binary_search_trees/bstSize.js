var BST = require('./bstAdd.js'); // we need this file to access our binary search tree class definition
// and also to access the add function so that we can create our test cases

// function that returns the count of leaves in a tree
// we'll do this recursively so we need to pass in the tree's root when we first call this
BST.prototype.size = function(root){ 
	if(!root){  // if what is passed in is null then just return 0
		return 0; 
	}
	else{ // recursively call the size function for the leaf's left and right subtrees plus 1 (which is the current leaf we're on)
		return this.size(root.left) + 1 + this.size(root.right);
	}
}

// test cases
var testBST = new BST(); // first we need to create our test tree
console.log(testBST.size(testBST.root)); // => 0
testBST.add(5); // add one leaf to tree
console.log(testBST.size(testBST.root)); // => 1
testBST.add(3).add(7).add(4).add(6); // and then add some more leaves to it
console.log(testBST.size(testBST.root)); // => 5