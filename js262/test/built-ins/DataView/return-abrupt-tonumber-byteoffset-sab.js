

/*---
esid: sec-dataview-buffer-byteoffset-bytelength
description: >
  Return abrupt from ToNumber(byteOffset)
info: |
  24.2.2.1 DataView (buffer, byteOffset, byteLength )

  ...
  4. Let numberOffset be ? ToNumber(byteOffset).
  ...
features: [SharedArrayBuffer]
---*/

var obj = {
  valueOf: function() {
    throw new Test262Error();
  }
};

var ab = new SharedArrayBuffer(0);

assert.throws(Test262Error, function() {
  new DataView(ab, obj);
});
