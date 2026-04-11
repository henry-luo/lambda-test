

/*---
esid: sec-%typedarray%.prototype.set-typedarray-offset
description: >
  Return abrupt from ToInteger(Symbol offset)
info: |
  22.2.3.23.2 %TypedArray%.prototype.set(typedArray [ , offset ] )

  1. Assert: typedArray has a [[TypedArrayName]] internal slot. If it does not,
  the definition in 22.2.3.23.1 applies.
  ...
  6. Let targetOffset be ? ToInteger(offset).
includes: [testTypedArray.js]
features: [BigInt, Symbol, TypedArray]
---*/

var s = Symbol("1");

testWithBigIntTypedArrayConstructors(function(TA) {
  var sample = new TA();

  assert.throws(TypeError, function() {
    sample.set(sample, s);
  });
}, null, ["passthrough"]);
