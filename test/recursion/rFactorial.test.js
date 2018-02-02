var rFacTest = require('./../../recursion/rFactorial.js');
var chai = require('chai');
var should = chai.should();

describe('recursive factorial', () => {
	it('should return 1 when given 1', () => {
		rFacTest.rFactorial(1).should.equal(1);
	});
	it('should return 6 when given 3', () => {
		rFacTest.rFactorial(3).should.equal(6);
	});
	it('should return 720 when given 6', () => {
		rFacTest.rFactorial(6).should.equal(720);
	});
	it('should return 1 when given 0', () => {
		rFacTest.rFactorial(0).should.equal(1);
	});
	it('should return 1 when given a negative number', () => {
		rFacTest.rFactorial(-5).should.equal(1);
	});
});
