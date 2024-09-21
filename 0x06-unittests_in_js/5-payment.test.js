const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');
const sinon = require('sinon');
const Utils = require('./utils');

describe('Test Suite using hooks', function () {
  let arg1, arg2, result, consoleSpy, stub;
  
  beforeEach(() => {
    stub = sinon.stub(Utils, 'calculateNumber');
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
    stub.restore();
  });

  it('checking calledOnce & result', function () {
    arg1 = 100;
    arg2 = 20;
    result = 120;
    stub.withArgs('SUM', arg1, arg2).returns(result);
    sendPaymentRequestToApi(arg1, arg2);

    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('Checking calledOnce & another values', function () {
    arg1 = arg2 = 10;
    result = 20;
    stub.withArgs('SUM', arg1, arg2).returns(result);
    sendPaymentRequestToApi(arg1, arg2);

    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
