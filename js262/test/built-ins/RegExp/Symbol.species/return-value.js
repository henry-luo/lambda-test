

/*---
esid: sec-get-regexp-@@species
description: Return value of @@species accessor method
info: |
    1. Return the this value.
features: [Symbol.species]
---*/

var thisVal = {};
var accessor = Object.getOwnPropertyDescriptor(RegExp, Symbol.species).get;

assert.sameValue(accessor.call(thisVal), thisVal);
