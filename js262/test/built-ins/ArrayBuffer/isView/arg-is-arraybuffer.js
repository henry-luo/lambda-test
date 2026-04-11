

/*---
esid: sec-arraybuffer.isview
description: >
  Return false from an instance of ArrayBuffer
info: |
  24.1.3.1 ArrayBuffer.isView ( arg )

  1. If Type(arg) is not Object, return false.
  2. If arg has a [[ViewedArrayBuffer]] internal slot, return true.
  3. Return false.
---*/

var sample = new ArrayBuffer(1);

assert.sameValue(ArrayBuffer.isView(sample), false);
