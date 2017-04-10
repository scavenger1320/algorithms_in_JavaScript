// create a new binary search tree
var BST = function(){
	this.root = null; // a new tree simply has a root until we start adding nodes
}

// create a node object that will be inserted into a binary search tree
var BSTNode = function(value){
	this.val = value;
	this.left = null;
	this.right = null;
}

// function to add a new node to a binary search tree
// this version allows for duplicate values and treats duplicate values as being greater
// meaning a duplicate value will be inserted to the duplicate node's right subtree
BST.prototype.add = function(value){ // function takes in a value that will be used to create a new Node
	var nodeToAdd = new BSTNode(value); // let's go ahead and just create the node right away and store it in a variable to be used later
	if(!this.root){ // first check if the bst is empty
		this.root = nodeToAdd; // if it is then we just simply point the root to the new node and we're done
		return this;
	}
	var current = this.root; // since the tree isn't empty we set a current variable to the root and use it to navigate through the tree
	while(current){ // loop through as long as current exists until we find where the new node goes
		// these checks determine what side of the tree we need to go
		// if a node exists on that side, then we set current to it so that we can move down the tree
		// but if that side of the tree is null, then we've found where this new node goes and insert it there
		if(value < current.val && current.left){ 
			current = current.left;
		}
		else if(value < current.val && !current.left){
			current.left = nodeToAdd;
			return this;
		}
		else if(value >= current.val && current.right){
			current = current.right;
		}
		else{
			current.right = nodeToAdd;
			return this;
		}
	}
}

module.exports = BST; // this allows us to export the BST class to other files for them to use
// we'll need the BST and BSTNode definition as well as the add function to create our test cases
// in other binary search tree files

// test cases
// var testBST = new BST();
// console.log(testBST);
// testBST.add(5);
// console.log(testBST);
// testBST.add(3);
// console.log(testBST);
// testBST.add(7);
// console.log(testBST);
// testBST.add(4);
// console.log(testBST)
// testBST.add(6);
// console.log(testBST);