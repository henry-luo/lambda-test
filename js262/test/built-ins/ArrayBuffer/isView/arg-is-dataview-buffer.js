

/*---
esid: sec-arraybuffer.isview
description: >
  Return false from DataView's instance `.buffer`
info: |
  24.1.3.1 ArrayBuffer.isView ( arg )

  1. If Type(arg) is not Object, return false.
  2. If arg has a [[ViewedArrayBuffer]] internal slot, return true.
  3. Return false.
features: [DataView]
---*/

var sample = new DataView(new ArrayBuffer(1), 0, 0).buffer;

assert.sameValue(ArrayBuffer.isView(sample), false);
