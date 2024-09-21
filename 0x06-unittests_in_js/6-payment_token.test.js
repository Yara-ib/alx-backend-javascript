const { expect, assert } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');
const sinon = require('sinon');

describe('Test Suite', function () {
  it('Test Async with promise', function () {
    return getPaymentTokenFromAPI(true).then((response) => {
      assert.equal(response, "{ data: 'Successful response from the API' }");
    });
  });

  it('Test Async with done callback', function (done) {
    consoleSpy = sinon.spy(console, 'log');
    getPaymentTokenFromAPI(true).then(() => {
      expect(
        consoleSpy.calledWith("{ data: 'Successful response from the API' }")
      ).to.be.true;
      consoleSpy.restore();
    });
    done();
  });
});
