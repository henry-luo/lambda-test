

/*---
esid: sec-arraybuffer.isview
description: >
  Return true if is an instance of DataView
info: |
  24.1.3.1 ArrayBuffer.isView ( arg )

  1. If Type(arg) is not Object, return false.
  2. If arg has a [[ViewedArrayBuffer]] internal slot, return true.
  3. Return false.
features: [DataView]
---*/

var sample = new DataView(new ArrayBuffer(1), 0, 0);

assert.sameValue(ArrayBuffer.isView(sample), true);
