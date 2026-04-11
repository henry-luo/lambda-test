

/*---
esid: sec-object.values
description: Object.values should terminate if getting a value throws an exception
author: Jordan Harband
---*/

var trappedKey = {
  get a() {
    throw new RangeError('This error should be re-thrown');
  },
  get b() {
    throw new Test262Error('Should not try to get the second element');
  }
};

assert.throws(RangeError, function() {
  Object.values(trappedKey);
});
