'use strict';
var SLL = require("./index.js"); // we need this file to access our singly linked list class along with the randomList and add methods

// function that returns true/false if a list is empty
SLL.prototype.isEmpty = function(){
	if(!this.head){ // just check if the head is null
		return true; // if it is then the list is empty so return true
	}
	else{ // else head is not null which means theres a node there
		return false; // and thus not empty so return false
	}
}

// same function in ternary
SLL.prototype.isEmptyTern = function(){
	return this.head ? false:true;
}

// test cases
var testSll = new SLL(); // create our new empty list
console.log(testSll.isEmpty()); // => true
console.log(testSll.isEmptyTern()); // => true
testSll.randomList(6); // add 6 random nodes into the list
console.log(testSll.isEmpty()); // => false
console.log(testSll.isEmptyTern()); // => false
testSll.addBack(22); // add in another node
console.log(testSll.isEmpty()); // => false
console.log(testSll.isEmptyTern()); // => false