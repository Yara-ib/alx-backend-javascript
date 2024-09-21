const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('Check', function () {
  it('If it called Once or not', function () {
    const arg1 = 100;
    const arg2 = 20;
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(arg1, arg2);
    sinon.assert.calledOnce(spy);
  });
});
