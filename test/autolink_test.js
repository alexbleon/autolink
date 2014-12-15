'use strict'

var autolink = require('../lib/autolink.js');

describe('Truth', function () {
  it('should be true', function () {
    var isCall = false;
    var option = {src : "hello"};
    autolink(option, function() {
      isCall = true;
    });
    isCall.should.be.true;
  })

})
