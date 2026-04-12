

/*---
esid: sec-array.prototype.fill
description: >
  Return abrupt from ToInteger(start) as a Symbol.
info: |
  22.1.3.6 Array.prototype.fill (value [ , start [ , end ] ] )

  ...
  5. Let relativeStart be ToInteger(start).
  6. ReturnIfAbrupt(relativeStart).
  ...
features: [Symbol]
---*/

var start = Symbol(1);

assert.throws(TypeError, function() {
  [].fill(1, start);
});
