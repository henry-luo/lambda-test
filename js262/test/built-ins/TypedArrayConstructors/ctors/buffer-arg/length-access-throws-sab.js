

/*---
esid: sec-typedarray-buffer-byteoffset-length
description: >
  Returns abrupt from ToLength(length)
info: |
  22.2.4.5 TypedArray ( buffer [ , byteOffset [ , length ] ] )

  This description applies only if the TypedArray function is called with at
  least one argument and the Type of the first argument is Object and that
  object has an [[ArrayBufferData]] internal slot.

  ...
  14. Else,
    a. Let newLength be ? ToLength(length).
  ...
includes: [testTypedArray.js]
features: [SharedArrayBuffer, TypedArray]
---*/

var buffer = new SharedArrayBuffer(8);
var len = {
  valueOf() {
    throw new Test262Error();
  }
};

testWithTypedArrayConstructors(function(TA) {
  assert.throws(Test262Error, function() {
    new TA(buffer, 0, len);
  });
});
