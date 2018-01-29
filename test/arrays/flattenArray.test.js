var flattenTest = require('./../../arrays/flattenArray.js');
var chai = require('chai');
var should = chai.should();

describe('flattenArrNew', function() {
	it('should flatten an empty array', function() {
		flattenTest.flattenArrNew([]).should.deep.equal([]);
	});
	it('should flatten an array with several nested arrays', function() {
		flattenTest.flattenArrNew([1,[2,3],4,[5],[6,7,8],[]]).should.deep.equal([1,2,3,4,5,6,7,8]);
	});
	it('should flatten an already flattened array', function() {
		flattenTest.flattenArrNew([1,2,3,4,5,6]).should.deep.equal([1,2,3,4,5,6]);
	});
});

describe('flattenArrSame', function() {
	it('should flatten an empty array', function() {
		flattenTest.flattenArrSame([]).should.deep.equal([]);
	});
	it('should flatten an array with several nested arrays', function() {
		flattenTest.flattenArrSame([1,[2,3],4,[5],[6,7,8],[]]).should.deep.equal([1,2,3,4,5,6,7,8]);
	});
	it('should flatten an already flattened array', function() {
		flattenTest.flattenArrSame([1,2,3,4,5,6]).should.deep.equal([1,2,3,4,5,6]);
	});
});
