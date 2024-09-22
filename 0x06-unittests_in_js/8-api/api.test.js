const { expect } = require('chai');
const app = require('./api');
const request = require('request');

describe('Test Suite for Server', function () {
  it('1- Testing result', function (done) {
    request.get('http://localhost:7865/', (err, res) => {
      expect(res.body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('2- Testing status Code', function (done) {
    request.get('http://localhost:7865/', (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});
