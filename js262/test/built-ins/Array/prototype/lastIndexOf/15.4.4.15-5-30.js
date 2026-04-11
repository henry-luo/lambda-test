

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - side effects produced by step 3 are
    visible when an exception occurs
---*/

var stepFiveOccurs = false;

var obj = {};
Object.defineProperty(obj, "length", {
  get: function() {
    return {
      valueOf: function() {
        throw new TypeError();
      }
    };
  },
  configurable: true
});

var fromIndex = {
  valueOf: function() {
    stepFiveOccurs = true;
    return 0;
  }
};
assert.throws(TypeError, function() {
  Array.prototype.lastIndexOf.call(obj, undefined, fromIndex);
});
assert.sameValue(stepFiveOccurs, false, 'stepFiveOccurs');
