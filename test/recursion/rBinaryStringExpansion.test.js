var rBSETest = require('./../../recursion/rBinaryStringExpansion.js');
var chai = require('chai');
var should = chai.should();

describe('recursive binary string expansion', () => {
	it('should return 2 results when given string mixed with one variable', () => {
		rBSETest.rBinaryStringExpansion('01?').should.deep.equal(['010', '011']);
	});
	it('should return 4 results when given string mixed with two variables', () => {
		rBSETest.rBinaryStringExpansion('01??').should.deep.equal(['0100', '0101', '0110', '0111']);
	});
	it('should return 1 result when given string with no variables', () => {
		rBSETest.rBinaryStringExpansion('01').should.deep.equal(['01']);
	});
	it('should return 8 results when given string with 3 variables only', () => {
		rBSETest.rBinaryStringExpansion('???').should.deep.equal(['000', '001', '010', '011', '100', '101', '110', '111']);
	});
	it('should return empty string result in array when given empty string', () => {
		rBSETest.rBinaryStringExpansion('').should.deep.equal(['']);
	});
});
