

/*---
description: >
    Direct eval code has the same `this` binding as the calling context
    (non-strict function scope)
esid: sec-performeval
---*/

var thisValue;

(function() {
  thisValue = (0,eval)('this;');
}());

assert.sameValue(thisValue, this);
