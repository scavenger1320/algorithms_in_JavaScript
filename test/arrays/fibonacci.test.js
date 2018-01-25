var fibTest = require('./../../arrays/fibonacci.js');
var assert = require('assert');
var chai = require('chai');
var should = chai.should();

// this set uses chai's should function
describe('fibonacci', function() {
	it('should return 0', function() {
		fibTest.fibonacci(0).should.equal(0);
	});
	it('should return 1', function() {
		fibTest.fibonacci(2).should.equal(1);
	});
	it('should return 2', function() {
		fibTest.fibonacci(3).should.equal(2);
	});
	it('should return 5', function() {
		fibTest.fibonacci(5).should.equal(5);
	});
	it('should return 8', function() {
		fibTest.fibonacci(6).should.equal(8);
	});
})

// this set uses Node's native assert module
describe('fibonacci2', function() {
	it('should return 0', function() {
		assert.equal(fibTest.fibonacci2(0), 0);
	});
	it('should return 1', function() {
		assert.equal(fibTest.fibonacci2(2), 1);
	});
	it('should return 2', function() {
		assert.equal(fibTest.fibonacci2(3), 2);
	});
	it('should return 5', function() {
		assert.equal(fibTest.fibonacci2(5), 5);
	});
	it('should return 8', function() {
		assert.equal(fibTest.fibonacci2(6), 8)
	});
})
