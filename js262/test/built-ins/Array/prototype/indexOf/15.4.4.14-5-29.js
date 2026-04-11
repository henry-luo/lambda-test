

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - side effects produced by step 2 are
    visible when an exception occurs
---*/

var stepFiveOccurs = false;

var obj = {};
Object.defineProperty(obj, "length", {
  get: function() {
    throw new RangeError();
  },
  configurable: true
});

var fromIndex = {
  valueOf: function() {
    stepFiveOccurs = true;
    return 0;
  }
};
assert.throws(RangeError, function() {
  Array.prototype.indexOf.call(obj, undefined, fromIndex);
});
assert.sameValue(stepFiveOccurs, false, 'stepFiveOccurs');
