const chai = require('chai');
const expect = chai.expect;

const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumberUpdated', function () {
  it('Checking general case, missing type', function () {
    expect(() => calculateNumber('str', 1, 3).to.throw('Error'));
  });

  describe('1 - SUM case', function () {
    it('Checking when values is negative', function () {
      const result = calculateNumber('SUM', -3, -4.6);
      expect(result).to.equal(-8);
    });

    it('Checking if values is positive & float', function () {
      const result = calculateNumber('SUM', 5, 4.6);
      expect(result).to.equal(10);
    });

    it('Checking when value is missing or NaN', function () {
      const result = calculateNumber('SUM', NaN, 4.6);
      expect(result).to.be.NaN;

      const result2 = calculateNumber('SUM', NaN);
      expect(result2).to.be.NaN;
    });

    it('Checking when value is with 0.5', function () {
      const result = calculateNumber('SUM', 5.5, 4.6);
      expect(result).to.equal(11);
    });
  });

  describe('2 - SUBTRACT case', function () {
    it('Checking when values is negative', function () {
      const result = calculateNumber('SUBTRACT', -3, -4.6);
      expect(result).to.equal(2);
    });

    it('Checking if values is positive & float', function () {
      const result = calculateNumber('SUBTRACT', 5, 4.6);
      expect(result).to.equal(0);
    });

    it('Checking when value is missing or NaN', function () {
      const result = calculateNumber('SUBTRACT', NaN, 4.6);
      expect(result).to.be.NaN;

      const result2 = isNaN(calculateNumber('SUBTRACT', NaN));
      expect(result2).to.be.true;
    });

    it('Checking when value is with 0.5', function () {
      const result = calculateNumber('SUBTRACT', 5.5, 4.6);
      expect(result).to.equal(1);
    });
  });

  describe('3 - DIVIDE case', function () {
    it('Checking when values is negative', function () {
      const result = calculateNumber('DIVIDE', -3, -4.6);
      expect(result).to.equal(0.6);
    });

    it('Checking if values is positive & float', function () {
      const result = calculateNumber('DIVIDE', 5, 4.6);
      expect(result).to.equal(1);
    });

    it('Checking when value is missing or NaN', function () {
      const result = calculateNumber('DIVIDE', NaN, 4.6);
      expect(result).to.be.NaN;
      const result2 = isNaN(calculateNumber('DIVIDE', NaN), NaN);
      expect(result2).to.be.true;
    });

    it('Checking when value is with 0.5', function () {
      const result = calculateNumber('DIVIDE', 5.5, 4.6);
      expect(result).to.equal(1.2);
    });

    it('Checking when b = 0', function () {
      const result = calculateNumber('DIVIDE', 5.5, 0);
      expect(result).to.equal('Error');
    });
  });
});
