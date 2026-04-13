

/*---
esid: sec-arraybuffer.isview
description: >
  Return true if arg is an instance of TypedArray
info: |
  24.1.3.1 ArrayBuffer.isView ( arg )

  1. If Type(arg) is not Object, return false.
  2. If arg has a [[ViewedArrayBuffer]] internal slot, return true.
  3. Return false.
features: [TypedArray]
includes: [testTypedArray.js]
---*/

testWithTypedArrayConstructors(function(ctor) {
  var sample = new ctor();

  assert.sameValue(ArrayBuffer.isView(sample), true);
});
