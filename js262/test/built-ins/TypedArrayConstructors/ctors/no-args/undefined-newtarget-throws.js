

/*---
esid: sec-typedarray
description: >
  Throws a TypeError if NewTarget is undefined.
info: |
  22.2.4.1 TypedArray( )

  This description applies only if the TypedArray function is called with no
  arguments.

  1. If NewTarget is undefined, throw a TypeError exception.
  ...
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  assert.throws(TypeError, function() {
    TA();
  });
});
