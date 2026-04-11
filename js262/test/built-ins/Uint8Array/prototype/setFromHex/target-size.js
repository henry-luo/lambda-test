

/*---
esid: sec-uint8array.prototype.setfromhex
description: Uint8Array.prototype.setFromHex behavior when target buffer is small
includes: [compareArray.js]
features: [uint8array-base64, TypedArray]
---*/


var target = new Uint8Array([255, 255]);
var result = target.setFromHex('aabbcc');
assert.sameValue(result.read, 4);
assert.sameValue(result.written, 2);
assert.compareArray(target, [170, 187]);


var target = new Uint8Array([255, 255, 255]);
var result = target.setFromHex('aabbcc');
assert.sameValue(result.read, 6);
assert.sameValue(result.written, 3);
assert.compareArray(target, [170, 187, 204]);


var target = new Uint8Array([255, 255, 255, 255]);
var result = target.setFromHex('aabbcc');
assert.sameValue(result.read, 6);
assert.sameValue(result.written, 3);
assert.compareArray(target, [170, 187, 204, 255]);
