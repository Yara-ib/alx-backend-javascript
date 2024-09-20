const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
  it('calculateNumber(1, 3)', function () {
    assert.equal(calculateNumber(1, 3), 4);
  });

  it('calculateNumber(1, 3.7)', function () {
    assert.equal(calculateNumber(1, 3.7), 5);
  });

  it('calculateNumber(1.2, 3.7)', function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });

  it('calculateNumber(1.5, 3.7)', function () {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
