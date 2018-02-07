var rTribTest = require('./../../recursion/rTribonacci.js');
var chai = require('chai');
var should = chai.should();

describe('recursive tribonacci', () => {
	it('should return 0 when given 0', () => {
		rTribTest.rTribonacci(0).should.equal(0);
	});
	it('should return 1 when given 3', () => {
		rTribTest.rTribonacci(3).should.equal(1);
	});
	it('should return 4 when given 5', () => {
		rTribTest.rTribonacci(5).should.equal(4);
	});
	it('should return 24 when given 8', () => {
		rTribTest.rTribonacci(8).should.equal(24);
	})
});