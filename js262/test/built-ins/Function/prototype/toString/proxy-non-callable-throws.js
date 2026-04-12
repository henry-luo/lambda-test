

/*---
esid: sec-function.prototype.tostring
description: >
  toString of Proxy for non-callable target throws
info: |
  ...
  Throw a TypeError exception.

features: [Proxy]
---*/

assert.throws(TypeError, function() {
  Function.prototype.toString.call(new Proxy({}, {}));
});
