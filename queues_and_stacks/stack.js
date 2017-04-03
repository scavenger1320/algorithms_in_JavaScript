function ArrStack(){
	this.stack = [];
	this.top = 0;
}

ArrStack.prototype.push = function(val){
	this.stack[this.top++] = val;
	return this;
}

// test cases
var testStack = new ArrStack();
console.log(testStack);
testStack.push(4);
testStack.push(6);
console.log(testStack);
console.log(testStack.stack[0]);
console.log(testStack.stack[1]);