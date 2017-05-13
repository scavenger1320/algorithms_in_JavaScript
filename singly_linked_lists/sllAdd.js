'use strict';
var SLLNode = require("./sllNode.js"); // we need this file to access our sll node class so that we can create a new node

module.exports = function(SLL){ // these methods will be exported so they can be used in other files, mainly the index.js file
								// where the SLL (singly linked list) class is being passed in and is what the methods will prototype to

	// create a function that adds a new node into an existing SLL at the back of the list
	SLL.prototype.addBack = function(value){ // function takes in a value
		var nodeToAdd = new SLLNode(value); // lets go ahead and create our new node and store it in a variable until we know where to add it in the SLL
		if(!this.head){ // check if head is null
			this.head = nodeToAdd; // if it is then it's an empty list so just set head to point to the new node
			return this; // and return since the function has now served its purpose
		}
		var current = this.head;  // set our current variable that we'll use to iterate through the list as the head node
		while(current.next){ // loop through the list until our current stops at the last node (whose .next will equal null)
			current = current.next; // move current forward one node each iteration of the loop
		}
		current.next = nodeToAdd; // current will be the last node at this point because of the previous loop so just set it's .next to the new node
		return this; // return this (the list itself) will allow us to chain this method
	}

	// create a function that adds a new node into an existing SLL at the front of the list
	SLL.prototype.addFront = function(value){ // function takes in a value
		var nodeToAdd = new SLLNode(value);  // lets go ahead and create our new node and store it in a variable to use later
		if(!this.head){ // check if head is null
			this.head = nodeToAdd; // if it is then it's an empty list so just set head to point to the new node
		}
		else{ //else it's not an empty list
			nodeToAdd.next = this.head; // set our new node's .next to point to the same node that head is
			this.head = nodeToAdd; // and reset our head to now point to the new node
		}
		return this;
	}

	// I'm going to write a function that automatically creates a random SLL to be used in test cases
	// function will take in an integer that defines how many nodes to add into the list
	SLL.prototype.randomList = function(nodeCount){
		while(nodeCount>0){ // do this loop as long as the count is greater than 0
			this.addFront(Math.floor((Math.random()*100)+1)); // call on the addFront function above and pass in a randomly generated value thats between 1 and 100
			nodeCount--; // we've just added one node into the list, so decrement the count by one
		}
	}

	//test cases
	// because these are within the module.exports you'll need to run the index.js file to do these tests
	// var testSLL = new SLL(); // create a new SLL
	// console.log(testSLL);
	// testSLL.addBack(2);
	// console.log(testSLL);
	// testSLL.addBack(4);
	// console.log(testSLL);
	// testSLL.addFront(8);
	// console.log(testSLL);
	// testSLL.addFront(10);
	// console.log(testSLL);
	// var testSLL2 = new SLL();
	// testSLL2.randomList(8);
	// console.log(testSLL2);
	// console.dir(testSLL2, {depth:null}); // .dir does the same as log but takes in another argument for how deep you want to display something
	// setting the depth to null it prints all the way through the object

}