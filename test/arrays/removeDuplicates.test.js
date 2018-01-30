var dupeTest = require('./../../arrays/removeDuplicates.js');
var chai = require('chai');
var should = chai.should();

describe('remove duplicates utilizing additional storage', () => {
	it('should remove duplicate values', () => {
		dupeTest.dedupeNew([1,2,3,1,5,2,2,4,3]).should.deep.equal([1,2,3,5,4]);
	});
	it('should NOT remove anything when there are no duplicate values', () => {
		dupeTest.dedupeNew([1,2,3,4,5]).should.deep.equal([1,2,3,4,5]);
	});
	it('should work with empty array', () => {
		dupeTest.dedupeNew([]).should.deep.equal([]);
	});
});

describe('remove duplicates without creating additional storage', () => {
	it('should remove duplicate values', () => {
		dupeTest.dedupeSame([1,2,3,1,5,2,2,4,3]).should.deep.equal([1,2,3,5,4]);
	});
	it('should NOT remove anything when there are no duplicate values', () => {
		dupeTest.dedupeSame([1,2,3,4,5]).should.deep.equal([1,2,3,4,5]);
	});
	it('should work with empty array', () => {
		dupeTest.dedupeSame([]).should.deep.equal([]);
	});
});

describe('remove duplicates more efficiently', () => {
	it('should remove duplicate values', () => {
		dupeTest.dedupeOneLoop([1,2,3,1,5,2,2,4,3]).should.deep.equal([1,2,3,5,4]);
	});
	it('should NOT remove anything when there are no duplicate values', () => {
		dupeTest.dedupeOneLoop([1,2,3,4,5]).should.deep.equal([1,2,3,4,5]);
	});
	it('should work with empty array', () => {
		dupeTest.dedupeOneLoop([]).should.deep.equal([]);
	});
});
