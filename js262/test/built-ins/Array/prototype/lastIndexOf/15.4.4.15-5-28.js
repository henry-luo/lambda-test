

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - side effects produced by step 1 are
    visible when an exception occurs
---*/

var stepFiveOccurs = false;
var fromIndex = {
  valueOf: function() {
    stepFiveOccurs = true;
    return 0;
  }
};
assert.throws(TypeError, function() {
  Array.prototype.lastIndexOf.call(undefined, undefined, fromIndex);
});
assert.sameValue(stepFiveOccurs, false, 'stepFiveOccurs');
