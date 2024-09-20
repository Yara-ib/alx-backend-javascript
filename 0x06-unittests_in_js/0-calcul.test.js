const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
  it('Checking the basic case, no round needed', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('Checking when number needs to be rounded', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('Converting string numbers to number & round it', function () {
    assert.strictEqual(calculateNumber('5.3', 3.7), 9);
  });

  it('Values is missing or not a number', function () {
    assert.strictEqual(calculateNumber(3.7), NaN);
    assert.strictEqual(calculateNumber(), NaN);
    assert.strictEqual(calculateNumber('str', 5), NaN);
  });
});
