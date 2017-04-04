//get the fibonacci value at the (num)th position
function rfibonacci(num){
	if(num == 0 || num == 1){  // this is the base case
		return num;
	}
	return rfibonacci(num - 2) + rfibonacci(num - 1); // this makes forward progress
}

// sample fibonacci sequence
// sequence follows standard array indexing so fibonacci of 0 is the first value
// [0,1,1,2,3,5,8,13,21,34,55]

//test cases
var fib = rfibonacci(0); // => 0
console.log(fib);
var fib2 = rfibonacci(3); // => 2
console.log(fib2);
var fib3 = rfibonacci(5); // => 5
console.log(fib3)
var fib4 = rfibonacci(8); // => 21
console.log(fib4);