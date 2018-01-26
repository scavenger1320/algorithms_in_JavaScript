var bPTest = require('./../../arrays/balancePoint.js');
var chai = require('chai');
var should = chai.should();

describe('balancePoint', function() {

	// (1+2+3+4 =10 / 10)
	it('should return true with last index balance point', function() {
		bPTest.balancePoint([1,2,3,4,10]).should.equal(true);
	});

	// should this return true or false? Good question to ask
	// an interviewer since technically it does balance out
	// however, the question asks for a balance point BETWEEN indices
	// since there's no indices to be between, then this should probably return false
	// remove the '&& len' in the while condition to make it return true for this case
	it('should return false with an empty array', function() {
		bPTest.balancePoint([]).should.equal(false);
	});

	it('should return false with no balance point anywhere', function() {
		bPTest.balancePoint([1,2,3,20]).should.equal(false);
	});

	it('should return false with only 1 index in array', function() {
		bPTest.balancePoint([2]).should.equal(false);
	});

	// (-4+20 = 16 / 3+5+8 = 16)
	it('should return true with balance point in interior of array', function() {
		bPTest.balancePoint([-4,20,3,5,8]).should.equal(true);
	});

	// (11 / 1+2+3+5 = 11)
	it('should return true with balance point at first index', function() {
		bPTest.balancePoint([11,1,2,3,5]).should.equal(true);
	});

});
