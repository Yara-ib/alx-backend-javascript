const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumberUpdated', function () {
  it('Checking general case, missing type', function () {
    assert.throws(() => {
      calculateNumber('str', 1, 3);
    }, 'Error');
  });
  describe('1 - SUM case', function () {
    it('Checking when values is negative', function () {
      assert.strictEqual(calculateNumber('SUM', -3, -4.6), -8);
    });

    it('Checking if values is positive & float', function () {
      assert.strictEqual(calculateNumber('SUM', 5, 4.6), 10);
    });

    it('Checking when value is missing or NaN', function () {
      assert.ok(isNaN(calculateNumber('SUM', NaN, 4.6), NaN));
      assert.ok(isNaN(calculateNumber('SUM', NaN), NaN));
    });

    it('Checking when value is with 0.5', function () {
      assert.strictEqual(calculateNumber('SUM', 5.5, 4.6), 11);
    });
  });

  describe('2 - SUBTRACT case', function () {
    it('Checking when values is negative', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', -3, -4.6), 2);
    });

    it('Checking if values is positive & float', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 5, 4.6), 0);
    });

    it('Checking when value is missing or NaN', function () {
      assert.ok(isNaN(calculateNumber('SUBTRACT', NaN, 4.6), NaN));
      assert.ok(isNaN(calculateNumber('SUBTRACT', NaN), NaN));
    });

    it('Checking when value is with 0.5', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 4.6), 1);
    });
  });

  describe('3 - DIVIDE case', function () {
    it('Checking when values is negative', function () {
      assert.strictEqual(calculateNumber('DIVIDE', -3, -4.6), 0.6);
    });

    it('Checking if values is positive & float', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 5, 4.6), 1);
    });

    it('Checking when value is missing or NaN', function () {
      assert.ok(isNaN(calculateNumber('DIVIDE', NaN, 4.6), NaN));
      assert.ok(isNaN(calculateNumber('DIVIDE', NaN), NaN));
    });

    it('Checking when b = 0', function () {
      assert.throws(() => {
        calculateNumber('DIVIDE', 15, 0);
      }, 'Error');
    });
  });
});
