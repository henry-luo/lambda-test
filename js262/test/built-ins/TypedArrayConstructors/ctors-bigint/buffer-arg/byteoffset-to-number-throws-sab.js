

/*---
esid: sec-typedarray-buffer-byteoffset-length
description: >
  Return abrupt from parsing integer value from byteOffset
info: |
  22.2.4.5 TypedArray ( buffer [ , byteOffset [ , length ] ] )

  This description applies only if the TypedArray function is called with at
  least one argument and the Type of the first argument is Object and that
  object has an [[ArrayBufferData]] internal slot.

  ...
  7. Let offset be ? ToInteger(byteOffset).
  ...
includes: [testBigIntTypedArray.js]
features: [BigInt, SharedArrayBuffer, TypedArray]
---*/

var buffer = new SharedArrayBuffer(8);
var byteOffset = {
  valueOf: function() {
    throw new Test262Error();
  }
};

testWithBigIntTypedArrayConstructors(function(TA) {
  assert.throws(Test262Error, function() {
    new TA(buffer, byteOffset);
  });
});
