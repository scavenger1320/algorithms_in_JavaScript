var rFibTest = require('./../../recursion/rFibonacci.js');
var chai = require('chai');
var should = chai.should();

describe('recursive fibonacci', () => {
	it('should return 0 when given 0', () => {
		rFibTest.rfibonacci(0).should.equal(0);
	});
	it('should return 1 when given 1', () => {
		rFibTest.rfibonacci(1).should.equal(1);
	});
	it('should return 5 when given 5', () => {
		rFibTest.rfibonacci(5).should.equal(5);
	});
	it('should return 21 when given 8', () => {
		rFibTest.rfibonacci(8).should.equal(21);
	});
});



// sample fibonacci sequence
// sequence follows standard array indexing so fibonacci of 0 is the first value
// [0,1,1,2,3,5,8,13,21,34,55]