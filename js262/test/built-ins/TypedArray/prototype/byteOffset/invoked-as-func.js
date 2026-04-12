

/*---
esid: sec-get-%typedarray%.prototype.byteoffset
description: Throws a TypeError exception when invoked as a function
info: |
  22.2.3.3 get %TypedArray%.prototype.byteOffset

  1. Let O be the this value.
  2. If Type(O) is not Object, throw a TypeError exception.
  3. If O does not have a [[ViewedArrayBuffer]] internal slot, throw a TypeError
  exception.
  ...
includes: [testTypedArray.js]
features: [TypedArray]
---*/

var TypedArrayPrototype = TypedArray.prototype;
var getter = Object.getOwnPropertyDescriptor(
  TypedArrayPrototype, 'byteOffset'
).get;

assert.throws(TypeError, function() {
  getter();
});
