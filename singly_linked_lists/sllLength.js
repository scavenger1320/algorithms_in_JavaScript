'use strict';
var SLL = require("./index.js"); // we need this file to access our singly linked list class along with the randomList and add methods

// function that returns the length of a list (aka count of nodes)
SLL.prototype.length = function(){
	var count = 0;  // set our counter variable that'll keep tally of the number of nodes starting with 0
	var current = this.head; // set our current variable that we'll use to iterate through the list as the head
	while(current){ // run loop while current node exists and is not null (if list is empty current would have been set to null)
		count++; // increment our counter
		current = current.next; // move our current variable along to the next node
	}
	return count;
}



// test cases
var testSll = new SLL(); // create our new empty list
console.log(testSll.length()); // => 0
testSll.randomList(6); // add 6 random nodes into the list
console.log(testSll.length()); // => 6