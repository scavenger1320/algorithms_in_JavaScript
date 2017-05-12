'use strict';
var SLL = require("./index.js"); // we need this file to access our singly linked list class along with the randomList and add methods
var SLLNode = require("./sllNode.js"); // we also need this file to access our sll node class so that we can create a new node

// function that inserts a new node immediately after an existing node with a given value
// if that value doesn't exist inside the list then just insert the new node at the end of the list
SLL.prototype.appendVal = function(value,after){ // first parameter is the value for the new node and second parameter is the value we're looking for in the list to append
	var nodeToAdd = new SLLNode(value); // let's go ahead and create our new node that we're going to add right away and store it in a variable to use once we determine where to put it
	if(!this.head){ // first check to see if the list is empty
		this.head = nodeToAdd; // if it is set the head to point to the new node
		return this; // and return
	}
	var current = this.head; // set current to the head which we'll use to navigate through the list to find the proper insertion point
	while(current.next && current.val != after){ // run the loop while current's next pointer doesn't point to null and it's value doesn't match the one we're looking to append after
		current = current.next; // move current up to the next node. This will navigate through the list until we get to where we need to be
	} // at this point current will be pointing to the node we need to append after, or if the after value was never found it'll point to the last node in the list
	nodeToAdd.next = current.next; // set the new node's next pointer to whatever current's next is pointing to
	current.next = nodeToAdd; // set the current node's next pointer to the new node
	return this; // and just return the list
};

// test cases
var testSll = new SLL(); // create a new singly linked list
console.log(testSll); // => a list whose head is null
testSll.appendVal(2,3); // this will test appending to an empty list
console.log(testSll); // => head->2
testSll.appendVal(4,5); // this will test appending to a value that doesn't exist
console.log(testSll); // => head->2->4
testSll.appendVal(6,7); // this will again test appending to a value that doesn't exist
console.dir(testSll, {depth:null}); // => head->2->4->6
testSll.appendVal(5,4); // this will test appending within the list
console.dir(testSll, {depth:null}); // => head->2->4->5->6
testSll.appendVal(7,6); // this will test appending to a value that's also the head node
console.dir(testSll, {depth:null}); // => head->2->4->5->6->7