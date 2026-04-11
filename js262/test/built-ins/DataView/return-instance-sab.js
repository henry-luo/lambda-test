

/*---
esid: sec-dataview-buffer-byteoffset-bytelength
description: >
  Returns new instance
info: |
  24.2.2.1 DataView (buffer, byteOffset, byteLength )

  ...
  12. Let O be ? OrdinaryCreateFromConstructor(NewTarget, "%DataViewPrototype%",
  « [[DataView]], [[ViewedArrayBuffer]], [[ByteLength]], [[ByteOffset]] »).
  ...
  17. Return O.
features: [SharedArrayBuffer]
---*/

var ab, sample;

ab = new SharedArrayBuffer(1);
sample = new DataView(ab, 0);
assert.sameValue(sample.constructor, DataView);
assert.sameValue(Object.getPrototypeOf(sample), DataView.prototype);

ab = new SharedArrayBuffer(1);
sample = new DataView(ab, 1);
assert.sameValue(sample.constructor, DataView);
assert.sameValue(Object.getPrototypeOf(sample), DataView.prototype);
