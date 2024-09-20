const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
  it('Checking the basic case, no round needed', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('Checking when number needs to be rounded', function () {
    assert.strictEqual(calculateNumber(1, 3.5), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('Converting string numbers to number & round it', function () {
    assert.strictEqual(calculateNumber('5.3', 3.7), 9);
  });

  it('Values is missing or NaN', function () {
    assert.ok(isNaN(calculateNumber(3.7), NaN));
    assert.ok(isNaN(calculateNumber(), NaN));
    assert.ok(isNaN(calculateNumber('str', 5), NaN));
    assert.ok(isNaN(calculateNumber(NaN, 5), NaN));
  });

  it('Checking negative values', function () {
    assert.strictEqual(calculateNumber(-3, 3.7), 1);
    assert.strictEqual(calculateNumber(-3, -3.7), -7);
  });
});
