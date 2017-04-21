var SLL = require("../singly_linked_lists/sllAdd.js"); // we need this file to access our singly linked list class definition
// and it's functions to create a random list

// function that removes and returns the node at the back (end) of the list
SLL.prototype.removeBack = function(){
	var temp;  // declare our temp variable that we'll store our removed node with
	var current; // declare our current variable that we'll use to navigate through the list with
	if(!this.head){ // check if head is null (meaning list is empty)
		temp = null; // in which case just set temp to null;
	}
	else if(!this.head.next){ // else check if the head is the only node in the list
		temp = this.head; // in which case we'll set temp to equal the head node
		this.head = null; // and set head to null making it an empty list since we removed the only node in it
	}
	else{ // else there's more than one node in the list
		current = this.head; // so set current to the head so that we can navigate through it
		while(current.next.next){ // run loop until our current lands at the second to last node (so current's next node's next will point to null)
			current = current.next; // move current along to the next node while the above is true
		} // at this point current should now be pointing to the second to last node in the list
		temp = current.next; // so store current's next node since that'll be the end node
		current.next = null; // and break that last node off by pointing the current node's next pointer to null
	} 
	return temp; // and return the node we removed
}



// test cases
var testSll = new SLL(); // create our new empty list
console.log(testSll.removeBack()); // => null
testSll.addFront(33).addFront(5).addFront(7); // add some nodes into the list
console.log(testSll.removeBack()); // => node with value 7
testSll.addFront(22); // add another node
console.log(testSll.removeBack()); // => node with value 22