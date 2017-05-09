var SLL = require("../singly_linked_lists/sllAdd.js"); // we need this file to access our singly linked list class definition
// and it's functions to create a random list and add nodes

// function that finds the max value in a list and moves it to the end while preserving original order of the other values
SLL.prototype.maxToBack = function(){
	if(!this.head){ // first check if the list is empty
		return this; // in which case just return the empty list
	} // if we don't check this we'll get an error as soon as the while loop does it's check and can't find the next attribute of null
	var previous = null; // we need to track the node prior to the node with the max value
	var current = this.head; // set current variable to the head
	var max = current; // set max to current since at the start it technically will have the maximum value
	while(current.next){ // run this loop until current is the last node in the list (which means it's next points to null)
		if(current.next.val > max.val){ // at each iteration check if the current node's next node's value is greater than the max node's value
			previous = current; // if it is we set previous to the current node since it's the node immediately before the new max node
			max = current.next; // and set max to the correct node
		}
		current = current.next; // move current along to the next node
	} // at this point current is pointing to the last node in the list, we've found our node with the max value and previous will be right before max
	if(max != current){ // check that max doesn't equal current because if it does then the max is already at the back of the list
		if(!previous){ // now we need to check if the max is at the head of the list, meaning previous would still be null
			this.head = max.next; // in which case we'll have a new head so set it
		} // besides having a new head, if we didn't do this check we would get an error the moment we try to set a new previous.next since null wouldn't have a next
		else{ // otherwise we just set the previous node's next to point to the node after max, thus skipping over it
			previous.next = max.next; 
		} // the next line is just a ternary version of the above if/else statement
		// previous ? previous.next = max.next : this.head = max.next;
		current.next = max; // now set the current (which is the last node in the list) to point to the max node, making the max node the last one in the list
		max.next = null; // don't forget to set the max node's next to null, otherwise we'll have a loop inside our list
	}
	return this; // return the list
}

// test cases
var testSll = new SLL(); // create our new empty list
console.log(testSll);
console.log(testSll.maxToBack());
testSll.randomList(6); // add 6 random nodes into the list
console.dir(testSll, {depth: null});
testSll.maxToBack();
console.dir(testSll, {depth: null});