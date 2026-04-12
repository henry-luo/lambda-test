

/*---
description: >
    Direct eval code has the same `this` binding as the calling context (strict
    function scope)
esid: sec-performeval
flags: [noStrict]
---*/

var thisValue;

(function() {
  thisValue = eval('"use strict"; this;');
}());

assert.sameValue(thisValue, this);
