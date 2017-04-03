//get the fibonacci value at the (num)th position
function rfibonacci(num){
	if(num == 0 || num == 1){  // this is the base case
		return num;
	}
	return rfibonacci(num - 2) + rfibonacci(num - 1); // this makes forward progress
}


//test cases
var fib = rfibonacci(0);
console.log(fib);
var fib2 = rfibonacci(3);
console.log(fib2);
var fib3 = rfibonacci(5);
console.log(fib3)
var fib4 = rfibonacci(8);
console.log(fib4);