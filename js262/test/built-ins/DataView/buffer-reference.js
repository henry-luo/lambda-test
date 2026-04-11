

/*---
esid: sec-dataview-buffer-byteoffset-bytelength
description: >
  Reuse buffer argument instead of making a new clone
info: |
  24.2.2.1 DataView (buffer, byteOffset, byteLength )

  ...
  14. Set O's [[ViewedArrayBuffer]] internal slot to buffer.
  ...
  17. Return O.
---*/

var buffer = new ArrayBuffer(8);

var dv1 = new DataView(buffer, 0);
var dv2 = new DataView(buffer, 0);

assert.sameValue(dv1.buffer, buffer);
assert.sameValue(dv2.buffer, buffer);
