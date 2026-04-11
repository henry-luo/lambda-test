

/*---
esid: sec-arraybuffer.isview
description: >
  Return false if arg is not Object
info: |
  24.1.3.1 ArrayBuffer.isView ( arg )

  1. If Type(arg) is not Object, return false.
  ...
---*/

assert.sameValue(ArrayBuffer.isView(null), false, "null");
assert.sameValue(ArrayBuffer.isView(undefined), false, "undefined");
assert.sameValue(ArrayBuffer.isView(1), false, "number");
assert.sameValue(ArrayBuffer.isView(""), false, "string");
