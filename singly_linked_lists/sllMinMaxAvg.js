'use strict';
var SLL = require("./index.js"); // we need this file to access our singly linked list class along with the randomList and add methods

// function that finds the min, max and average of values in a list and returns an object with those results
SLL.prototype.minMaxAvg = function(){
	if(!this.head){ // first check if the list is empty
		return null; // in which case we'll just return null 
	} 
	var current = this.head; // set current variable to the head
	var max = current.val; // set max to current node's value since at the start it technically will have the maximum value
	var min = current.val; // set min to current node's value since at the start it technically will have the minimum value
	var count = 0; // start up our count of values so that we can divise the average
	var sum = 0; // start up our sum to keep a running sum of the values to divise the average
	while(current){ // run this loop until current becomes null
		count ++; // increment our count
		sum += current.val; // add the current node's value to the running sum
		if(current.val > max){ // check if the current node's value is greater than max
			max = current.val; // set max to the new value if it is
		}
		if(current.val < min){ // check if the current node's value is less than min
			min = current.val; // set min to the new value if it is
		}
		current = current.next; // move current along to the next node
	}
	return {min: min, max: max, avg: sum/count}; // return an object with the desired values
}

// test cases
var testSll = new SLL(); // create our new empty list
console.log(testSll.minMaxAvg()); // => null
testSll.addFront(2);
console.log(testSll.minMaxAvg()); // => {min: 2, max: 2, avg: 2}
testSll.addFront(-10);
console.log(testSll.minMaxAvg()); // => {min: -10, max: 2, avg: -4}
testSll.addFront(10).addFront(4).addFront(6).addFront(8);
console.log(testSll.minMaxAvg()); // => {min: -10, max: 10, avg: 3.3333333333333335}
testSll.addFront(15);
console.log(testSll.minMaxAvg()); // => {min: -10, max: 15, avg: 5}

