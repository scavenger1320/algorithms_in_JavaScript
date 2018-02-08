const bubbleTest = require('./../../sorts/bubbleSortArray.js');
const chai = require('chai');
const should = chai.should();

describe('bubble sort for array types', () => {
	it('should sort an empty array', () => {
		bubbleTest.bubbleSort([]).should.deep.equal([]);
	});
	it('should sort an array with only one value', () => {
		bubbleTest.bubbleSort([2]).should.deep.equal([2]);
	});
	it('should sort an already sorted array', () => {
		bubbleTest.bubbleSort([1,2,3,4,5]).should.deep.equal([1,2,3,4,5]);
	});
	it('should sort an unsorted array', () => {
		bubbleTest.bubbleSort([8,3,2,6,1,9]).should.deep.equal([1,2,3,6,8,9]);
	});
	it('should sort a worst case unsorted array', () => {
		bubbleTest.bubbleSort([6,5,4,3,2,1,]).should.deep.equal([1,2,3,4,5,6]);
	});
})

