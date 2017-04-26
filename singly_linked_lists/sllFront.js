var SLL = require("../singly_linked_lists/sllAdd.js"); // we need this file to access our singly linked list class definition
// and it's functions to create a random list

// function that returns the value of the node at the front (head) of the list
SLL.prototype.front = function(){
	if(!this.head){ // first check if the list is empty
		return null; // in which case just return null
	}
	return this.head.val; // if its not empty just return the value of the head node
}

// exact same function written with ternary
SLL.prototype.frontTern = function(){
	return this.head ? this.head.val:null;
}



// test cases
var testSll = new SLL(); // create our new empty list
console.log(testSll.front()); // => null
console.log(testSll.frontTern()); // => null
testSll.randomList(6); // add 6 random nodes into the list
console.log(testSll.front()); // => it's a random list so your guess is as good as mine!
console.log(testSll.frontTern()); // => same as whatever returns on line 24
testSll.addFront(22); // add in a definite value to check for true condition
console.log(testSll.front()); // => 22
console.log(testSll.frontTern()); // => 22