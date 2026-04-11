

/*---
description: >
    Direct eval code has the same `this` binding as the calling context
    (non-strict function scope)
esid: sec-performeval
flags: [noStrict]
---*/

var thisValue;

(function() {
  thisValue = eval('this;');
}());

assert.sameValue(thisValue, this);
