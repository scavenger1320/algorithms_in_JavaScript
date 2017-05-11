'use strict';
var SLL = require("./index.js"); // we need this file to access our singly linked list class along with the randomList and add methods

// function that puts the values of a list (in order) into an array and returns the array
SLL.prototype.toArray = function(){
	var newArray = []; // create an empty array that we'll use to push list values into
	var current = this.head; // set current variable to the head
	while(current){ // run this loop while current exists and is not null
		newArray.push(current.val); // push the current node's value into the array
		current = current.next; // move current along to the next node
	} // at this point we've gone through each node in the list
	return newArray; // return the new array
}

// test cases
var testSll = new SLL(); // create our new empty list
console.log(testSll.toArray()); // => []
testSll.randomList(6); // add 6 random nodes into the list
console.log(testSll.toArray()); // => [?,?,?,?,?,?] it's a random list so there's no way to know the values!
testSll.addBack(22); // add in a definite value
console.log(testSll.toArray()); // => [?,?,?,?,?,?,22] the first six values should be exactly the same as above 