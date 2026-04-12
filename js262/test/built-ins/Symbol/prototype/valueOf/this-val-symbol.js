

/*---
esid: sec-symbol.prototype.valueof
description: Called on a Symbol value
info: |
  1. Let s be the this value.
  2. If Type(s) is Symbol, return s.
features: [Symbol]
---*/

var valueOf = Symbol.prototype.valueOf;
var subject = Symbol('s');

assert.sameValue(valueOf.call(subject), subject);
