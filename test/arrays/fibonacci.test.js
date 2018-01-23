var fibTest = require('./../../arrays/fibonacci.js');
var assert = require('assert');

describe('fibonacci', function() {
	it('should return 0', function() {
		assert.equal(fibTest.fibonacci(0), 0);
	});
	it('should return 1', function() {
		assert.equal(fibTest.fibonacci(2), 1);
	});
	it('should return 2', function() {
		assert.equal(fibTest.fibonacci(3), 2);
	});
	it('should return 5', function() {
		assert.equal(fibTest.fibonacci(5), 5);
	});
	it('should return 8', function() {
		assert.equal(fibTest.fibonacci(6), 8)
	});
})

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
