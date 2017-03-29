// Queue is FIFO - First In First Out
// Queues are normally based on Singly Linked Lists (SLL)
// We'll use OOP and JavaScript prototype to build out the methods on an SLQueue
// all test cases can be found towards end of file

// So first we'll define the Singly List Queue object
// we'll add a tail attribute to the list to make it easier to add
function SLQueue(){
	this.head = null;
	this.tail = null;
}

// Now we'll define our Singly List Node object
function SLNode(val){
	this.val = val;
	this.next = null;
}

// write a function to add a value to the end of a queue
SLQueue.prototype.enqueue = function(val){
	var newNode = new SLNode(val); // let's create our new node that we are going to add
	if(!this.head){ // check if queue is empty
		this.head = newNode; // set the head to new node if queue is empty
	}
	else{
		this.tail.next = newNode; // else just set the tail's next to new node
	}
	this.tail = newNode; // regardless of whether the if or else ran, we need to set the tail to the new node
	return this; // and return the newly revised queue
}


// write a function to remove and return the value at the front of the queue
SLQueue.prototype.dequeue = function(){
	if(!this.head){ // check if queue is empty and return null if it is
		return null;
	}
	var temp = this.head.val; // store the value of the head to return later
	if(this.head == this.tail){ // we need to check if there's only 1 value in the queue
		this.tail = null; // if we didn't do this check, tail would still point to the node that we're trying to dequeue
	}
	this.head = this.head.next; // point head to the next node
	return temp; // return the value we stored earlier which has now been disconnected from the list
}



// write a function that returns the value at the front of the queue without removing it
SLQueue.prototype.front = function(){
	if(!this.head){ // check if the queue is empty first
		return null;
	}
	return this.head.val; // just return the value at the head of the queue
}

// write a function that returns true/false if a given value is found in the queue
SLQueue.prototype.contains = function(val){
	var current = this.head;  // set a variable to track current node at the head 
	while(current){ // do this while current exists and is not null
		if(current.val == val){ // if the value at the current node equals the given value return true
			return true;
		}
		current = current.next; // set current node to the next one in the list
	}
	return false; // we've gone through the entire list meaning that we never found the given value in it so return false
}

// write a function to remove a queue's lowest value, including duplicates
SLQueue.prototype.removeMin = function(){
	if(!this.head){ // check if queue is empty
		return null;
	}
	var min = this.head.val; // set minimum value as the head's value since at this point it is the minimum by default
	var current = this.head.next // set current to track the node we're on. We already set min to the head's value so we can start at the next node
	while(current){ // do this while current node exists and is not null
		if(current.val < min){ // check if the current node's value is less than the minimum
			min = current.val; // reset minimum if it is
		}
		current = current.next;  // move current to the next node in the queue
	}
	// now that we've found our minimum value we can start the process to remove them
	var previous = null; // we need to track the previous node
	current = this.head; // reset current back to the head
	while(current){ // do this while current node exists and is not null
		if(current.val == min){ // check if the current node's value matches the minimum value
			if(!previous){ // if previous is still null, that means our head is a minimum value
				this.head = current.next; // so we just point our head to the next node
			}
			else{
				previous.next = current.next; // else we point the previous node's next to the current's next, this skipping over the current node
			}
		}
		else{
			previous = current; // previous only needs to move up one if current wasn't a minimum value
		}
		current = current.next; // move current to the next node in the queue
	}
	this.tail = previous; // at the end of the loop previous will be pointing to the last node in the queue
	return this;
}

// same as above but only remove the last minimum value if there are duplicates of it
SLQueue.prototype.removeMinLast = function(){
	if(!this.head){ // check if queue is empty
		return null;
	}
	var min = this.head.val; // set minimum value as the head's value since at this point it is the minimum by default
	var previous = null; // we need to track the previous node
	var current = this.head // set current to track the node we're on.
	while(current.next){ // do this while current node exists and is not null
		if(current.next.val < min || current.next.val == min){ // check if the next node's value is less than the minimum or if it's a duplicate of the minimum
			min = current.val; // reset minimum if it is
			previous = current; // and move previous to point to the current node
		}
		current = current.next;  // move current to the next node in the queue
	}
	// at this point previous will point to the the node before the last minimum value we found
	if(!previous){ // if previous is still null then the minimum value is our head
		this.head = this.head.next; // and we simply point the head to the next node
		previous = this.head; // we need to set previous here only so that we can check it later to adjust the tail if needed
	}
	else{
		previous.next = previous.next.next // set the node before the minimum value to point to the next node after the minimum value
	}
	if(!previous || !previous.next){ // if previous is null (meaning we removed the only value in the queue or if the new previous node's next is null
		this.tail = previous; // then that means we have a new tail and need to adjust it, otherwise it could point to a node that is supposed to be removed
	}
	return this;
}

// test cases
var testQueue = new SLQueue;
console.log("new testQueue is", testQueue);
testQueue.enqueue(8);
console.log("queue after enqueue 8", testQueue);
console.log("front value is", testQueue.front());
testQueue.enqueue(3);
console.log("queue after enqueue 3", testQueue);
console.log("front value is", testQueue.front());
testQueue.enqueue(5);
console.log("queue after enqueue 5", testQueue);
console.log("front value is", testQueue.front());
console.log("does queue contain 3?", testQueue.contains(3));
console.log("does queue contain 7?", testQueue.contains(7));
testQueue.dequeue();
console.log("queue after 1st dequeue", testQueue);
console.log("front value is", testQueue.front());
testQueue.dequeue();
console.log("queue after 2nd dequeue", testQueue);
console.log("front value is", testQueue.front());
testQueue.dequeue();
console.log("queue after 3rd dequeue", testQueue);
console.log("front value is", testQueue.front());
console.log("does queue contain 3?", testQueue.contains(3));
// testQueue.removeMin();
testQueue.removeMinLast();
console.log(testQueue);
testQueue.enqueue(2);
console.log(testQueue);
// testQueue.removeMin();
testQueue.removeMinLast();
console.log(testQueue);
testQueue.enqueue(2).enqueue(4).enqueue(2).enqueue(1);
console.log(testQueue);
// testQueue.removeMin();
testQueue.removeMinLast();
console.log(testQueue);
testQueue.removeMinLast();
console.log(testQueue);