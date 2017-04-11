// write standalone functions implementing selection sort for singly linked lists
function sllSelectionSort(sll){ // pass in the sll
	if(!sll.head){ // check if the given list is empty
		return sll; // if it is there's nothing to sort so just return it
	}
	var sortedHalf = null; // this will keep track of the last node in the sorted section, which is null to start
	var current = sll.head; // current node will always start at the node after sortedHalf, or the head to start
	var min; // declare our min variable that'll keep track of the node with the minimum value through each iteration
	var preMin; // declare our preMin (pre-minimum) variable to stay one node behind the min to allow for swapping
	while(current){ // since current stays ahead of sortedHalf, once sortedHalf reaches the last node in the list current will be null
		preMin = sortedHalf; // preMin will reset to the last node of the sorted portion after each iteration
		min = current; // min will reset to the first node of the unsorted portion after each iteration
		while(current.next){ // run this loop until current gets to the last node
			if(current.next.val < min.val){ // at each stop check if the node's value after current is less than the min
				preMin = current; // if it is set preMin to the current node
				min = current.next; // because min will be set to the node after current
			}
			current = current.next // then move current along to the next node
		}  // at this point we've iterated through the unsorted portion and found the node with the minimum value
		if(!sortedHalf && preMin){ // the first time through we're dealing with the head so check if this is the first time and preMin exists (which means it moved) 
			preMin.next = min.next; // if it did then set preMin's next to skip over the min node
			min.next = sll.head; // set the min's next to point to the head
			sll.head = min; // and reset the head to min, which will remain the head now that this is the min node of the entire list
		}
		else if(preMin != sortedHalf){ // after the first time check if preMin has moved
			preMin.next = min.next; // if it did we found a new min and so we set the preMin's next to skip over min to min's next node
			min.next = sortedHalf.next; // then set min's next to point to what was the first node of the unsorted list
			sortedHalf.next = min; // and make the last node of the sorted portion point to the min
		} // if neither of the above were true, then the min was already in the correct spot
		sortedHalf = min; // now that the min of this iteration is where it's supposed to be move the end of the sorted portion over one
		current = sortedHalf.next; // and set current to the first node of the unsorted portion to start the next iteration of the while loop
	}
	return sll;
}

// test cases for singly linked list selection sort
var SLL = require("../singly_linked_lists/sllAdd.js"); // we need this file to access our singly linked list class definition
// and it's functions to create a random list
var testSll = new SLL(); // create our new empty list
console.log(testSll);
sllSelectionSort(testSll);
console.log(testSll);
testSll.randomList(6); // add 6 random nodes into the list
console.dir(testSll, {depth: null});
sllSelectionSort(testSll);
console.dir(testSll, {depth: null});