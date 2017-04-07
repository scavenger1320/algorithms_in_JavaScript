var BST = require('./bstAdd.js'); // we need this file to access our binary search tree class definition
// and also to access the add function so that we can create our test cases

// function that returns the height of a tree
// height defined as number of links from the root to the furthest leaf
// because it's the number of links, an empty tree returns -1, a tree with only a root returns 0
BST.prototype.height = function(root){
	if(!root){  // check if the node(root) passed in is null
		return -1;  // we return -1 because there's not a leaf node here so we need to back up one link 
	}
	var leftHeight = this.height(root.left); // get the height of the left subtree
	var rightHeight = this.height(root.right); // get the height of the right subtree
	if(leftHeight > rightHeight){ // check which height is greater because that'll be the tree we need for the height
		return leftHeight +1; // return what the height came back with +1 to account for this link
	}
	else{
		return rightHeight +1;
	}
	
}

// test cases
var testBST = new BST(); // first we need to create our test tree
console.log(testBST.height(testBST.root)); // => -1
testBST.add(5); // add one leaf to tree
console.log(testBST.height(testBST.root)); // => 0
testBST.add(3).add(7).add(4).add(6); // and then add some more leaves to it
console.log(testBST.height(testBST.root)); // => 2
testBST.add(8).add(9).add(10).add(12).add(11);
console.log(testBST.height(testBST.root)); // => 6
