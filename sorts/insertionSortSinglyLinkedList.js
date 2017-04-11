// write a standalone function implementing insertion sort for singly linked lists
function sllInsertionSort(sll){ // pass in the sll
	if(!sll.head){ // check if the given list is empty
		return sll; // if it is there's nothing to sort so just return it
	}
	var previous = sll.head; // set previous to stay behind the current. It also represents the last node of the sorted portion of the list
	var current = previous.next; // set current to the node after previous, which is essentially the first node of the unsorted portion
	var preRunner; // if current node is out of place, we'll use preRunner and runner to go back through the list
	var runner; // and current will end up being inserted between these two
	while(current){ // run the loop while current exists. Once previous gets to the last node, current will be null
		if(current.val < previous.val){ // check if the current node's value is less than the previous, which means it needs to be inserted inside the sorted portion
			previous.next = current.next; //if it is, set the previous node's next pointer to skip over the current since the current will be moving
			preRunner = null; // set this to null incase the current needs to move into the head position
			runner = sll.head; // and start the runner at the head
			while(current.val > runner.val){ // do this as long as the current node's value is greater than the runner's value, therefore stopping where current will need to be inserted
				preRunner = runner; // move the preRunner and runner's along
				runner = runner.next; // once the loop has stopped current will go between these two
			} // notice unlike an array, we have to start at the beginning and go forward to find the insertion spot since we can't navigate backwards like in an array due to the directionality of an SLL
			current.next = runner; // now let's put current where it belongs and point it's next to the runner
			if(!preRunner){ // we need to do this check because if preRunner is still null
				sll.head = current; // then the current is going to be the new head
			}
			else{
				preRunner.next = current; // else current is not the head so this finished putting it between preRunner and runner
			}
		}
		else{ // other wise the current node's value is sorted in relation to the previous sorted portion
			previous = previous.next; // so move previous up one node. This needs to be inside an else because if current had to move above
		} // then the previous (aka last node of the sorted list) needs to stay where it was 
		current = previous.next; // whether or not previous moved in the above if/else, it's still the last node of the sorted portion so we need to reset current to the node right after it
	}
	return sll;
}

// test cases for singly linked list insertion sort
var SLL = require("../singly_linked_lists/sllAdd.js"); // we need this file to access our singly linked list class definition
// and it's functions to create a random list
var testSll = new SLL(); // create our new empty list
console.log(testSll);
sllInsertionSort(testSll);
console.log(testSll);
testSll.randomList(6); // add 6 random nodes into the list
console.dir(testSll, {depth: null});
sllInsertionSort(testSll);
console.dir(testSll, {depth: null});