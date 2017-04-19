var SLL = require("../singly_linked_lists/sllAdd.js"); // we need this file to access our singly linked list class definition
// and it's functions to create a random list

// function that removes and returns the node at the front (head) of the list
SLL.prototype.removeFront = function(){
	if(!this.head){ // check if head is null (meaning list is empty)
		return null; // in which case we just return null
	}
	var temp = this.head; // store the head in a temp variable
	this.head = this.head.next; // now point the head to what was the second node in the list (making it the first node now)
	temp.next = null; // you can explicitly disconnect temp from the list, however, if you don't do this, it'll still be garbage collected since it'll lose any reference to it regardless of what it points to
	return temp; // and return the original head node that we stored in temp
}



// test cases
var testSll = new SLL(); // create our new empty list
console.log(testSll.removeFront()); // => null
testSll.addFront(33).addFront(5).addFront(7); // add some nodes into the list
console.log(testSll.removeFront()); // => node with value 7
testSll.addFront(22); // add another node
console.log(testSll.removeFront()); // => node with value 22