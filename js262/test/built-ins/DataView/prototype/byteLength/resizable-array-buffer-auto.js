

/*---
esid: sec-get-dataview.prototype.bytelength
description: |
  throws a TypeError if the underlying ArrayBuffer is resized beyond the
  boundary of the dynamically-sized DataView instance
features: [resizable-arraybuffer]
---*/


assert.sameValue(typeof ArrayBuffer.prototype.resize, "function");

var ab = new ArrayBuffer(4, {maxByteLength: 5});
var dataView = new DataView(ab, 1);
var expected = 3;

assert.sameValue(dataView.byteLength, expected);

try {
  ab.resize(5);
  expected = 4;
} catch (_) {}

assert.sameValue(dataView.byteLength, expected, "following grow");

try {
  ab.resize(3);
  expected = 2;
} catch (_) {}

assert.sameValue(dataView.byteLength, expected, "following shrink (within bounds)");

try {
  ab.resize(1);
  expected = 0;
} catch (_) {}

assert.sameValue(dataView.byteLength, expected, "following shrink (on boundary)");

try {
  ab.resize(0);
  expected = TypeError;
} catch (_) {
  expected = Test262Error;
}

assert.throws(expected, function() {
  dataView.byteLength;
  throw new Test262Error('the operation completed successfully');
});
