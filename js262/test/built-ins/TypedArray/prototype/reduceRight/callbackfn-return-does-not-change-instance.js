

/*---
esid: sec-%typedarray%.prototype.reduceright
description: >
  The callbackfn return does not change the `this` instance
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([0, 1, 0]);

  sample.reduceRight(function() {
    return 42;
  }, 7);

  assert.sameValue(sample[0], 0, "[0] == 0");
  assert.sameValue(sample[1], 1, "[1] == 1");
  assert.sameValue(sample[2], 0, "[2] == 0");
});
