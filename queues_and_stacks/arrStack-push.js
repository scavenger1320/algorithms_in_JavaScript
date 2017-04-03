// write a function that pushes a value to the top (end) of a stack
// stack is based on an array
function arrStackPush(val, stack=[]){ // if a stack isn't passed in we'll set a default to just make and empty stack(array)
	stack.push(val); // we simply push the new value to the end of the stack
	return stack;
}

// test cases
var testStack = arrStackPush(2);
console.log(testStack);
arrStackPush(4, testStack)
console.log(testStack);