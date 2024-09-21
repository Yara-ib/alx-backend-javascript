const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('Check', function () {
  it('If it called Once or not', function () {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(120);
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnce(stub);
    stub.restore();
  });
});
