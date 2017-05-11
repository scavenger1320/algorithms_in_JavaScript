'use strict';
var SLL = require("./index.js"); // we need this file to access our singly linked list class along with the randomList and add methods

// function that returns the value of the node at the back (end) of the list
SLL.prototype.back = function(){
	if(!this.head){ // first check if the list is empty
		return null; // in which case just return null
	}
	var current = this.head; // set current variable to the head
	while(current.next){ // run this loop until current is the last node in the list (which means it's next points to null)
		current = current.next; // move current along to the next node
	} // at this point current is pointing to the last node in the list
	return current.val; // return the value of the last node
}

// test cases
var testSll = new SLL(); // create our new empty list
console.log(testSll.back()); // => null
testSll.randomList(6); // add 6 random nodes into the list
console.log(testSll.back()); // => it's a random list so your guess is as good as mine!
testSll.addBack(22); // add in a definite value to check for true condition
console.log(testSll.back()); // => 22
