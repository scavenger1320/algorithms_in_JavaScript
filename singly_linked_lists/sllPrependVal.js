'use strict';
var SLL = require("./index.js"); // we need this file to access our singly linked list class along with the randomList and add methods
var SLLNode = require("./sllNode.js"); // we also need this file to access our sll node class so that we can create a new node

// function that inserts a new node immediately before an existing node with a given value
// if that value doesn't exist inside the list then just insert the new node at the end of the list
SLL.prototype.prependVal = function(value,before){ // first parameter is the value for the new node and second parameter is the value we're looking for in the list to prepend
	var nodeToAdd = new SLLNode(value); // let's go ahead and create our new node that we're going to add right away and store it in a variable to use once we determine where to put it
	var current = this.head; // set current to the head which we'll use to navigate through the list to find the proper insertion point
	var previous = null; // keep track of the previous node since it's pointer will need to change to the new node
	while(current && current.val != before){ // run the loop while current exists and it's value doesn't match the one we're looking to prepend before
		previous = current; // move previous up to the current node
		current = current.next; // and then move current up to the next node. This will navigate through the list until we get to where we need to be
	} // at this point current will either be pointing to the node we need to prepend before or null, meaning the list is either empty or didn't contain the prepend value
	nodeToAdd.next = current; // set the new node's next pointer to current (this works regardless if current is a node or just null)
	if(!previous){ // we now need to check if previous is still null, meaning either the list is empty or the prepend value is the head
		this.head = nodeToAdd; // and therefore the head will now point to the new node
	}
	else{ // else previous will be pointing to a node in the list, either before the node with the prepend value or the last node in the list if it didn't contain the prepend value
		previous.next = nodeToAdd; // set the previous node's next pointer to the new node
	}
	// the above if/else statement can be written in ternary also like so:
	// previous ? previous.next = nodeToAdd : this.head = nodeToAdd;
	return this; // and just return the list
};

// test cases
var testSll = new SLL(); // create a new singly linked list
console.log(testSll); // => a list whose head is null
testSll.prependVal(2,3); // this will test prepending to an empty list
console.log(testSll); // => head->2
testSll.prependVal(4,5); // this will test prepending to a value that doesn't exist
console.log(testSll); // => head->2->4
testSll.prependVal(6,7); // this will again test prepending to a value that doesn't exist
console.dir(testSll, {depth:null}); // => head->2->4->6
testSll.prependVal(5,6); // this will test prepending within the list
console.dir(testSll, {depth:null}); // => head->2->4->5->6
testSll.prependVal(1,2); // this will test prepending to a value that's also the head node
console.dir(testSll, {depth:null}); // => head->1->2->4->5->6