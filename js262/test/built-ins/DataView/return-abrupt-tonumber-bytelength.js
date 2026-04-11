

/*---
esid: sec-dataview-buffer-byteoffset-bytelength
description: >
  Return abrupt from ToLength(byteLength)
info: |
  24.2.2.1 DataView (buffer, byteOffset, byteLength )

  ...
  10. If byteLength is undefined, then
    a. Let viewByteLength be bufferByteLength - offset.
  11. Else,
    a. Let viewByteLength be ? ToLength(byteLength).
  ...
---*/

var buffer = new ArrayBuffer(8);

var obj1 = {
  valueOf: function() {
    throw new Test262Error();
  }
};

var obj2 = {
  toString: function() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  new DataView(buffer, 0, obj1);
}, "valueOf");

assert.throws(Test262Error, function() {
  new DataView(buffer, 0, obj2);
}, "toString");
