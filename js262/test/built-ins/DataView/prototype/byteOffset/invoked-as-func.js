

/*---
esid: sec-get-dataview.prototype.byteoffset
description: Throws a TypeError exception when invoked as a function
info: |
  24.2.4.3 get DataView.prototype.byteOffset

  1. Let O be the this value.
  2. If Type(O) is not Object, throw a TypeError exception.
  3. If O does not have a [[DataView]] internal slot, throw a TypeError
  exception.
  ...
---*/

var getter = Object.getOwnPropertyDescriptor(
  DataView.prototype, 'byteOffset'
).get;

assert.throws(TypeError, function() {
  getter();
});
