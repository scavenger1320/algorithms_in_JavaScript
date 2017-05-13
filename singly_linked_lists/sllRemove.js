'use strict';
var SLL = require("./index.js"); // we need this file to access the singly linked list class and add methods

// function that given a value, removes the node containing that value from the list and returns it
SLL.prototype.remove = function(value){
	var current = this.head; // set current to the head so that we can navigate through the list
	var previous = null; // set a previous which will track the node before current, and once the value to remove is found it'll allow us to skip over it
	while(current){ // run this loop while a current node exists
		if(current.val == value){ // check if the current node's value matches the value we're looking to remove
			if(!previous){ // if previous is null then the node we're removing is the head
				this.head = current.next; // so now we have a new head
			}
			else{ // else the current node that we're removing is not the head but somewhere else in the list
				previous.next = current.next; // so just point the previous node's next to the current node's next, thus skipping over the node we're removing
			}
			break; // since we've found the node we want to remove let's break out of this while loop
		} // if the current node's value didn't match the value we're looking to remove
		previous = current; // then move previous up a node to the current
		current = current.next; // and then move the current up a node
	} // at this point we've either found the value in current and detached it from the list, or if the list didn't contain it current will be pointing to null
	return current; // so just return the current node
}
// if the node removed and returned isn't the last node, you'll notice that it still points to another node in the list
// we could set the removed node's next pointer to null
// but we don't have to since there won't be anything pointing to the removed node itself once this function exits (current only lives within the scope of this function)
// so this node will eventually be picked up by the garbage collector

// test cases
var testSll = new SLL(); // create a new list and then test removing a node from an empty list
console.log(testSll.remove(5)); // => null
testSll.addFront(2); // add a node to test removing a node which is the only one in the list
console.log(testSll.remove(2)); // => SLLNode { val: 2, next: null }
testSll.addBack(3).addBack(5); // add nodes to test removing a node that is the last one in a list
console.log(testSll.remove(5)); // => SLLNode { val: 5, next: null }
testSll.addBack(4).addBack(6).addBack(8).addBack(9); // now add some nodes to test removing one that's somewhere within the list
console.log(testSll.remove(8)); // => SLLNode { val: 8, next: [object] }