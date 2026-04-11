

/*---
description: >
    Direct eval code has the same `this` binding as the calling context (strict
    function scope)
esid: sec-performeval
flags: [onlyStrict]
---*/

var thisValue = null;

(function() {
  thisValue = eval('this;');
}());

assert.sameValue(thisValue, undefined);
