// Mock test
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon');

describe('Test Suite', function () {
  it('Testing using Mock', function () {
    const mock = sinon.mock(Utils);
    mock
      .expects('calculateNumber')
      .once()
      .withArgs('SUM', 100, 20)
      .returns(120);

    sendPaymentRequestToApi(100, 20);
    mock.verify();
    mock.restore();
  });
});
