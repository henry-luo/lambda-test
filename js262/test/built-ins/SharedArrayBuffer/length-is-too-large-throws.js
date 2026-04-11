

/*---
esid: sec-sharedarraybuffer-length
description: >
  Throws a RangeError if length >= 2 ** 53
info: |
  SharedArrayBuffer( length )

  1. If NewTarget is undefined, throw a TypeError exception.
  2. Let byteLength be ? ToIndex(length).

  ToIndex( value )

  1. If value is undefined, then
    a. Let index be 0.
  2. Else,
    a. Let integerIndex be ? ToInteger(value).
    b. If integerIndex < 0, throw a RangeError exception.
  ...
features: [SharedArrayBuffer]
---*/

assert.throws(RangeError, function() {
  
  new SharedArrayBuffer(9007199254740992);
}, "`length` parameter is too large");

assert.throws(RangeError, function() {
  new SharedArrayBuffer(Infinity);
}, "`length` parameter is positive Infinity");
