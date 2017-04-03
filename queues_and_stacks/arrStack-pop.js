// write a function that removes and returns the last value in a stack
// stack is based on an array
function arrStackPop(stack){ 
	var temp = stack.pop(); // we simply pop the last value and store it in a temp variable
	return temp; // return the temp which was set to be the popped value
}

// test cases
var testStack = [2,3,4];
console.log(testStack);
console.log(arrStackPop(testStack));
console.log(testStack);
console.log(arrStackPop(testStack));
console.log(testStack);
console.log(arrStackPop(testStack));
console.log(testStack);
console.log(arrStackPop(testStack));