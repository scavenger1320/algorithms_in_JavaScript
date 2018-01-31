var rBinTest = require('./../../recursion/rBinarySearch.js');
var chai = require('chai');
var should = chai.should();

var testArr = [2,4,6,8,10];

describe('recursive binary search', () => {
	it('should return true for value found near center of array', () => {
		rBinTest.rBinarySearch(testArr, 6).should.equal(true);
	});
	it('should return true for value found at first index', () => {
		rBinTest.rBinarySearch(testArr, 2).should.equal(true);
	});
	it('should return true for value found at last index', () => {
		rBinTest.rBinarySearch(testArr, 10).should.equal(true);
	});
	it('should return false for non-existing value within range of array values', () => {
		rBinTest.rBinarySearch(testArr, 7).should.equal(false);
	});
	it('should return false for non-existing value below lowest value in range', () => {
		rBinTest.rBinarySearch(testArr, 1).should.equal(false);
	});
	it('should return false for non-existing value greater than highest value in range', () => {
		rBinTest.rBinarySearch(testArr, 22).should.equal(false);
	});
	it('should return false when given an empty array', () => {
		rBinTest.rBinarySearch([], 5).should.equal(false);
	});
	it('should return true when value is the only value in the array', () => {
		rBinTest.rBinarySearch([3], 3).should.equal(true);
	});
	it('should return false for non-existing value with an array containing only one value', () => {
		rBinTest.rBinarySearch([3], 2).should.equal(false);
	})
})
