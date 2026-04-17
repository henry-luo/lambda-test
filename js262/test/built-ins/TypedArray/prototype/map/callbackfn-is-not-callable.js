

/*---
esid: sec-%typedarray%.prototype.map
description: >
  callbackfn is not callable
info: |
  22.2.3.19 %TypedArray%.prototype.map ( callbackfn [ , thisArg ] )

  ...
  4. If IsCallable(callbackfn) is false, throw a TypeError exception.
  ...
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA(3);

  assert.throws(TypeError, function() {
    sample.map();
  });

  assert.throws(TypeError, function() {
    sample.map(undefined);
  });

  assert.throws(TypeError, function() {
    sample.map(null);
  });

  assert.throws(TypeError, function() {
    sample.map({});
  });

  assert.throws(TypeError, function() {
    sample.map(1);
  });

  assert.throws(TypeError, function() {
    sample.map("");
  });

  assert.throws(TypeError, function() {
    sample.map(false);
  });
});
