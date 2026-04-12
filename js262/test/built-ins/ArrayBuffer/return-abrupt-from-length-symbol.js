

/*---
esid: sec-arraybuffer-length
description: >
  Throws a TypeError if length is a symbol
info: |
  ArrayBuffer( length )

  1. If NewTarget is undefined, throw a TypeError exception.
  2. Let byteLength be ? ToIndex(length).
  ...
features: [Symbol]
---*/

var s = Symbol();

assert.throws(TypeError, function() {
  new ArrayBuffer(s);
}, "`length` parameter is a Symbol");
