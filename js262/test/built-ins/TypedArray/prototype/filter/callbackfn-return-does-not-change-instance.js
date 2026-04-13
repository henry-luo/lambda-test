

/*---
esid: sec-%typedarray%.prototype.filter
description: >
  The callbackfn return does not change the instance
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample1 = new TA(3);

  sample1[1] = 1;

  sample1.filter(function() {
    return 42;
  });

  assert.sameValue(sample1[0], 0, "[0] == 0");
  assert.sameValue(sample1[1], 1, "[1] == 1");
  assert.sameValue(sample1[2], 0, "[2] == 0");
});
