'use strict';
var SLL = require("./index.js"); // we need this file to access our singly linked list class along with the randomList and add methods

// function that returns true or false whether a given value exists within a list
SLL.prototype.contains = function(val){
	var current = this.head; // set our current variable that we'll use to iterate through the list to point to the head initially
	while(current){ // run loop while current node exists and is not null (if list is empty current would have been set to null)
		if(val == current.val){ // check if the value at the current node we're on matches the given value
			return true; // if it does then return true
		}
		else{ // the current node's value doesn't match so...
			current = current.next; // ...move our current variable along to the next node
		}
	} // at this point we've gone through the entire list
	return false; // meaning we never found the value so we return false 
}



// test cases
var testSll = new SLL(); // create our new empty list
console.log(testSll.contains(2)); // => false
testSll.randomList(6); // add 6 random nodes into the list
console.log(testSll.contains(24)); // => either true or false depending if the random list happened to add this value
testSll.addFront(22); // add in a definite value to check for true condition
console.log(testSll.contains(22)); // => true