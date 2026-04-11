

/*---
esid: sec-dataview-buffer-byteoffset-bytelength
description: >
  Throws a TypeError if NewTarget is undefined.
info: |
  24.2.2.1 DataView (buffer, byteOffset, byteLength )

  1. If NewTarget is undefined, throw a TypeError exception.
  ...
features: [SharedArrayBuffer]
---*/

var obj = {
  valueOf: function() {
    throw new Test262Error("NewTarget should be verified before byteOffset");
  }
};

var buffer = new SharedArrayBuffer(1);

assert.throws(TypeError, function() {
  DataView(buffer, obj);
});
