var rSigTest = require('./../../recursion/rSigma.js');
var chai = require('chai');
var should = chai.should();

describe('recursive sigma', () => {
	it('should return 0 when given 0', () => {
		rSigTest.rSigma(0).should.equal(0);
	});
	it('should return 15 when given 5', () => {
		rSigTest.rSigma(5).should.equal(15);
	});
	it('should return 0 when given a negative number', () => {
		rSigTest.rSigma(-3).should.equal(0);
	});
});