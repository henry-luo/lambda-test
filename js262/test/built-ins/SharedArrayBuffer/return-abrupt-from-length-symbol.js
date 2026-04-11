

/*---
esid: sec-sharedarraybuffer-length
description: >
  Throws a TypeError if length is a symbol
info: |
  SharedArrayBuffer( length )

  1. If NewTarget is undefined, throw a TypeError exception.
  2. Let byteLength be ? ToIndex(length).
  ...
features: [SharedArrayBuffer, Symbol]
---*/

var s = Symbol();

assert.throws(TypeError, function() {
  new SharedArrayBuffer(s);
}, "`length` parameter is a Symbol");
