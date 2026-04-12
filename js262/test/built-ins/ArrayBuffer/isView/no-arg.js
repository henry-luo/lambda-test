

/*---
esid: sec-arraybuffer.isview
description: >
  Return false if isView is called with no arg
info: |
  24.1.3.1 ArrayBuffer.isView ( arg )

  1. If Type(arg) is not Object, return false.
  ...
---*/

assert.sameValue(ArrayBuffer.isView(), false);
