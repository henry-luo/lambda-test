

/*---
esid: sec-%typedarray%.prototype.toSorted
description: >
  %TypedArray%.prototype.toSorted does not mutate its this value
includes: [testTypedArray.js, compareArray.js]
features: [TypedArray, change-array-by-copy]
---*/

testWithTypedArrayConstructors(TA => {
  var ta = new TA([3, 1, 2]);
  ta.toSorted();

  assert.compareArray(ta, [3, 1, 2]);
  assert.notSameValue(ta.toSorted(), ta);
});
