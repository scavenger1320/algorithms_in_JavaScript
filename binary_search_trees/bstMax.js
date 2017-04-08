var BST = require('./bstAdd.js'); // we need this file to access our binary search tree class definition
// and also to access the add function so that we can create our test cases

// function that returns the maximum value in a tree
BST.prototype.max = function(){
	if(!this.root){  // check if tree is empty
		return null 
	}
	var current = this.root; // set our current variable to root so that we can navigate through the tree
	while(current.right){ // in a valid tree the maximum value will be the furthest leaf node to the right
		current = current.right; // so all we need to do is to navigate through the right subtrees until there is no right subtree
	}
	return current.val; // current stopped at the rightmost leaf node so just return its value
}

// test cases
var testBST = new BST(); // first we need to create our test tree
console.log(testBST.max()); // => null
testBST.add(5); // add one leaf to tree
console.log(testBST.max()); // => 5
testBST.add(3).add(7).add(4).add(6); // and then add some more leaves to it
console.log(testBST.max()); // => 7