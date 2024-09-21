const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const { expect } = require('chai');

describe('Check', function () {
  it('If it called Once or not', function () {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(120);
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnce(stub);
    stub.restore();
  });

  it('Assume some incorrect value as result, ensuring it using stub', function () {
    const stub = sinon.stub(Utils, 'calculateNumber');
    stub.withArgs('SUM', 100, 20).returns(500);
    const consoleSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWith('The total is: 500')).to.be.true;
    stub.restore();
    consoleSpy.restore();
  });

  it('Calling stub twice', function () {
    const stub = sinon.stub(Utils, 'calculateNumber');
    stub
      .withArgs('SUM', 100, 20)
      .onFirstCall()
      .returns(500)
      .onSecondCall()
      .returns(1000);
    const consoleSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWith('The total is: 500')).to.be.true;
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWith('The total is: 1000')).to.be.true;
    stub.restore();
    consoleSpy.restore();
  });
});
