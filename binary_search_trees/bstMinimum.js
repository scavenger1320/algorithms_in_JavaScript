var BST = require('./bstAdd.js'); // we need this file to access our binary search tree class definition
// and also to access the add function so that we can create our test cases

// function that returns the minimum value in a tree
BST.prototype.min = function(){
	if(!this.root){  // check if tree is empty
		return null 
	}
	var current = this.root; // set our current variable to root so that we can navigate through the tree
	while(current.left){ // in a valid tree the minimum value will be the furthest value to the left
		current = current.left; // so all we need to do is to navigate through the left subtrees until there is no left subtree
	}
	return current.val; // current stopped at the leftmost leaf so just return its value
}

// test cases
var testBST = new BST(); // first we need to create our test tree
console.log(testBST.min()); // => null
testBST.add(5); // add one leaf to tree
console.log(testBST.min()); // => 5
testBST.add(3).add(7).add(4).add(6); // and then add some more leaves to it
console.log(testBST.min()); // => 3