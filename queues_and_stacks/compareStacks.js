// write a function that given 2 stacks, returns true if they are identical
// can use a 3rd stack for storage
// even though these are based on an array, we can't simply iterate through them
// since these are stacks (LIFO), we have to follow the LIFO principle, otherwise we don't really have a stack
// THEORY WORKS BUT....RUNNING ON NODE THIS CODE EXCEEDS CALL STACK
// EQUALITY CHECK TO STOP WHILE LOOPS AREN'T REGISTERING
// THIS CODE NEEDS TO BE FIXED







// we have to pop off each stack one at a time to compare
// this means we'll need a 3rd stack for storage so that we can rebuild the original stacks


function compareStacks(stack1, stack2){
	var tempStack = [];
	var equal = true;
	while(equal && stack1 != [] && stack2 != []){
		var temp1 = stack1.pop();
		var temp2 = stack2.pop();
		tempStack.push(temp1);
		tempStack.push(temp2);
		if(temp1 !== temp2){
			equal = false
		}
		console.log(temp1,temp2,tempStack,stack1,stack2);
	}
	while(tempStack != []){
		stack2.push(tempStack.pop());
		stack1.push(tempStack.pop());
		console.log(tempStack);
	}
	console.log(temp1,temp2,tempStack,stack1,stack2);
	return equal;
}

// test cases
// var testStack1 = [1,2,6,4,5];
// var testStack2 = [1,2,3,4,5];
// console.log(compareStacks(testStack1,testStack2));