

/*---
esid: sec-array.prototype.shift
description: >
  A TypeError is thrown when "length" is [[Set]] on an array with non-writable "length".
info: |
  Array.prototype.shift ( )

  [...]
  4. Let first be ? Get(O, "0").
  [...]
  8. Perform ? Set(O, "length", 𝔽(len - 1), true).

  OrdinarySetWithOwnDescriptor ( O, P, V, Receiver, ownDesc )

  [...]
  2. If IsDataDescriptor(ownDesc) is true, then
    a. If ownDesc.[[Writable]] is false, return false.

  Set ( O, P, V, Throw )

  [...]
  1. Let success be ? O.[[Set]](P, V, O).
  2. If success is false and Throw is true, throw a TypeError exception.
---*/

var array = new Array(1);
var arrayPrototypeGet0Calls = 0;

Object.defineProperty(Array.prototype, "0", {
  get() {
    Object.defineProperty(array, "length", { writable: false });
    arrayPrototypeGet0Calls++;
  },
});

assert.throws(TypeError, function() {
  array.shift();
});

assert.sameValue(array.length, 1);
assert.sameValue(arrayPrototypeGet0Calls, 1);
