var BST = require('./bstAdd.js'); // we need this file to access our binary search tree class definition
// and also to access the add function so that we can create our test cases

// function that returns true or false if a given value is found within a tree
BST.prototype.contains = function(value){
	if(!this.root){  // check if tree is empty
		return false 
	}
	var current = this.root; // set our current variable to root so that we can navigate through the tree
	while(current){ // navigate through the tree as long as our current leaf exists
		if(current.val == value){  // check if the leaf we're on contains the value we're looking for
			return true;
		}
		else if(value < current.val){ // if it doesn't contain the value check which subtree we need to go into
			current = current.left; // and then move our current leaf along to that side
		}
		else{
			current = current.right;
		}
	}
	return false; // at this point current is null meaning we navigated through the tree and never found our value
}

// test cases
var testBST = new BST(); // first we need to create our test tree
console.log(testBST.contains(5)); // => false
testBST.add(5); // add one leaf to tree
console.log(testBST.contains(5)); // => true
testBST.add(3).add(7).add(4).add(6); // and then add some more leaves to it
console.log(testBST.contains(6)); // => true
console.log(testBST.contains(22)); // => false