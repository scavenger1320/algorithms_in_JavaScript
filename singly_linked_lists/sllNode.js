'use strict';

// create a node class that we'll export so that other files will be able to create new Nodes when needed
module.exports = function SLLNode(value){ // new nodes require a value
	this.val = value; // set the node's val (short for value) attribute to equal the passed in value
	this.next = null; // set the node's next pointer to just go to null
}