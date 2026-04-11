

/*---
esid: sec-array.prototype.fill
description: >
  Return abrupt from ToInteger(end) as a Symbol.
info: |
  22.1.3.6 Array.prototype.fill (value [ , start [ , end ] ] )

  ...
  8. If end is undefined, let relativeEnd be len; else let relativeEnd be
  ToInteger(end).
  9. ReturnIfAbrupt(relativeEnd).
  ...
features: [Symbol]
---*/

var end = Symbol(1);

assert.throws(TypeError, function() {
  [].fill(1, 0, end);
});
