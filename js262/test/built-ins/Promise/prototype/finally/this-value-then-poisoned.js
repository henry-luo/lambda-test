

/*---
author: Jordan Harband
description: >
  Promise.prototype.finally called with a `this` value whose `then` property is
  an accessor property that returns an abrupt completion
esid: sec-promise.prototype.finally
features: [Promise.prototype.finally]
---*/

var poisonedThen = Object.defineProperty(new Promise(function() {}), 'then', {
  get: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  Promise.prototype.finally.call(poisonedThen);
});

assert.throws(Test262Error, function() {
  poisonedThen.finally();
});
