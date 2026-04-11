

/*---
esid: sec-uint8array.prototype.setfrombase64
description: Conversion of base64 strings to Uint8Arrays
includes: [compareArray.js]
features: [uint8array-base64, TypedArray]
---*/


var standardBase64Vectors = [
  ["", []],
  ["Zg==", [102]],
  ["Zm8=", [102, 111]],
  ["Zm9v", [102, 111, 111]],
  ["Zm9vYg==", [102, 111, 111, 98]],
  ["Zm9vYmE=", [102, 111, 111, 98, 97]],
  ["Zm9vYmFy", [102, 111, 111, 98, 97, 114]],
];

standardBase64Vectors.forEach(function (pair) {
  var allFF = [255, 255, 255, 255, 255, 255, 255, 255];
  var target = new Uint8Array(allFF);
  var result = target.setFromBase64(pair[0]);
  assert.sameValue(result.read, pair[0].length);
  assert.sameValue(result.written, pair[1].length);

  var expected = pair[1].concat(allFF.slice(pair[1].length))
  assert.compareArray(target, expected, "decoding " + pair[0]);
});
