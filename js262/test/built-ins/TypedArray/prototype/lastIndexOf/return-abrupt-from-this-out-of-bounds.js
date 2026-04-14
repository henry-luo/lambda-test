

/*---
esid: sec-%typedarray%.prototype.lastindexof
description: Return abrupt when "this" value fails buffer boundary checks
includes: [testTypedArray.js]
features: [ArrayBuffer, TypedArray, arrow-function, resizable-arraybuffer]
---*/

assert.sameValue(
  typeof TypedArray.prototype.lastIndexOf,
  'function',
  'implements TypedArray.prototype.lastIndexOf'
);

assert.sameValue(
  typeof ArrayBuffer.prototype.resize,
  'function',
  'implements ArrayBuffer.prototype.resize'
);

testWithTypedArrayConstructors(TA => {
  var BPE = TA.BYTES_PER_ELEMENT;
  var ab = new ArrayBuffer(BPE * 4, {maxByteLength: BPE * 5});
  var array = new TA(ab, BPE, 2);

  try {
    ab.resize(BPE * 5);
  } catch (_) {}

  
  array.lastIndexOf(0);

  try {
    ab.resize(BPE * 3);
  } catch (_) {}

  
  array.lastIndexOf(0);

  var expectedError;
  try {
    ab.resize(BPE * 3 - 1);
    
    
    expectedError = TypeError;
  } catch (_) {
    
    
    expectedError = Test262Error;
  }

  assert.throws(expectedError, () => {
    array.lastIndexOf(0);
    throw new Test262Error('lastIndexOf completed successfully');
  });
});
