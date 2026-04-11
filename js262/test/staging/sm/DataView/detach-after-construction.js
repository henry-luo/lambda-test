

/*---
description: |
  pending
esid: pending
---*/

var buf = new ArrayBuffer([1,2]);
var bufView = new DataView(buf);

$262.detachArrayBuffer(buf);

assert.throws(TypeError, () => bufView.getInt8(0));
