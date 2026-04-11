

/*---
esid: sec-arraybuffer.isview
description: >
  Return false if arg is a TypedArray constructor
info: |
  24.1.3.1 ArrayBuffer.isView ( arg )

  1. If Type(arg) is not Object, return false.
  2. If arg has a [[ViewedArrayBuffer]] internal slot, return true.
  3. Return false.
features: [TypedArray]
includes: [testTypedArray.js]
---*/

testWithTypedArrayConstructors(function(ctor) {
  assert.sameValue(ArrayBuffer.isView(ctor), false);
}, null, ["passthrough"]);
