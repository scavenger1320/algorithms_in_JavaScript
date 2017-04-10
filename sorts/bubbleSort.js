// write standalone functions implementing bubble sort for arrays and for singly linked lists

// bubble sort an array
function arrayBubbleSort(arr){ // pass in the array to be sorted
	var len = arr.length; // store the length of the array in a variable to use later
	var temp; // declare the temp variable that we'll use inside our sorting algorithm
	while(len != 0){  // do this loop as long as len (set originally as array's length) isn't 0
		for(var i=0;i<len;i++){  // setup our inner loop to iterate through the array
			if(arr[i] > arr[i+1]){ // check if the value at our current index is greater than the value at the next index
				temp = arr[i]; // if it is then these 2 values aren't sorted so we need to swap them
				arr[i] = arr[i+1];
				arr[i+1] = temp;
			}	
		} // at this point we'll have iterated through the array and whatever the largest value was will have been moved to the end
		len--; // decrement our len because we now know that the end of the array is sorted 
	} // so when we loop back we only need to sort from the beginning of the array up until we get to where the sorted portion starts
	return arr;
}

// test cases for array bubble sort
// console.log(arrayBubbleSort([8,3,2,6,1,9])); // => [ 1, 2, 3, 6, 8, 9 ]
// console.log(arrayBubbleSort([1,2,3,4,5,6])); // => [ 1, 2, 3, 4, 5, 6 ]
// console.log(arrayBubbleSort([6,5,4,3,2,1])); // => [ 1, 2, 3, 4, 5, 6 ]
// console.log(arrayBubbleSort([])); // => []
// console.log(arrayBubbleSort([8])); // => [ 8 ]


// bubble sort a Singly Linked List (sll)
function sllBubbleSort(sll){ // pass in the sll
	if(!sll.head){ // check if the given list is empty
		return sll; // if it is there's nothing to sort so just return it
	}
	sll.addFront("temp anchor"); // create a temporary new node at the front to hold onto the list and give us a restarting point for each loop iteration
	var parent = sll.head; // set a parent variable to point to this newly created temporary node
	var last = null; // we need a last variable to point to the start of the sorted portion of the sll (starts at null since the list doesn't have any sorted nodes)
	while(parent.next != last){ // run this loop until last eventually points to the start of the list, thus meaning the entire list has been sorted
		var previous = parent; // we need to keep track of the node before the current so set it as the parent to start
		var current = parent.next; // now set the current variable to the first node in the list to use to iterate through it
		while(current.next && last != current.next){ // run until current gets to the second to last node (whether it's the end of the list or second to last before the sorted portion)
			if(current.val > current.next.val){ // check if the current node's value is greater then the next nodes value (thus unsorted)
				previous.next = current.next; // if it is set the previous node's next to skip over the current node
				current.next = current.next.next; // then set the current node's next to skip over what is now the previous node's next
				previous.next.next = current; // and finally set the previous node's next node's next to point to current
			} // the above basically swapped 2 nodes but touches on 4 nodes to make the swap work
			previous = previous.next; // and now move the previous up one node
			current = previous.next; // then point current to the newly moved previous node's next
		} // we have to set current in relation to previous because if a swap happened, current would have essentially jumped a node
		last = current; // at this point the current stopped at the second to last node (before end or sorted portion)
	} // so move the last up a node to now point to the new start of the sorted portion of the list
	sll.head = parent.next; // now reset the head to point to what should be the first node in the sorted list
	parent.next = null; // and break off the parent node
	return sll;
}

// test cases for singly linked list bubble sort
var SLL = require("../singly_linked_lists/sllAdd.js"); // we need this file to access our singly linked list class definition
// and it's functions to create a random list
var testSll = new SLL(); // create our new empty list
console.log(testSll);
sllBubbleSort(testSll);
console.log(testSll);
testSll.randomList(6); // add 6 random nodes into the list
console.dir(testSll, {depth: null});
console.dir(testSll, {depth: null});




