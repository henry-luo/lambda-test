

/*---
esid: sec-uint8array.prototype.setfrombase64
description: Uint8Array.prototype.setFromBase64 behavior when target buffer is small
includes: [compareArray.js]
features: [uint8array-base64, TypedArray]
---*/


var target = new Uint8Array([255, 255, 255, 255, 255]);
var result = target.setFromBase64('Zm9vYmFy');
assert.sameValue(result.read, 4);
assert.sameValue(result.written, 3);
assert.compareArray(target, [102, 111, 111, 255, 255]);


var target = new Uint8Array([255, 255, 255, 255]);
var result = target.setFromBase64('Zm9vYmE=');
assert.sameValue(result.read, 4);
assert.sameValue(result.written, 3);
assert.compareArray(target, [102, 111, 111, 255]);


var target = new Uint8Array([255, 255, 255, 255, 255, 255]);
var result = target.setFromBase64('Zm9vYmFy');
assert.sameValue(result.read, 8);
assert.sameValue(result.written, 6);
assert.compareArray(target, [102, 111, 111, 98, 97, 114]);


var target = new Uint8Array([255, 255, 255, 255, 255]);
var result = target.setFromBase64('Zm9vYmE=');
assert.sameValue(result.read, 8);
assert.sameValue(result.written, 5);
assert.compareArray(target, [102, 111, 111, 98, 97]);


var target = new Uint8Array([255, 255, 255, 255, 255]);
var result = target.setFromBase64('Zm9vYmE');
assert.sameValue(result.read, 7);
assert.sameValue(result.written, 5);
assert.compareArray(target, [102, 111, 111, 98, 97]);


var target = new Uint8Array([255, 255, 255, 255, 255]);
var result = target.setFromBase64('Zm9vYmE=', { lastChunkHandling: 'stop-before-partial' });
assert.sameValue(result.read, 8);
assert.sameValue(result.written, 5);
assert.compareArray(target, [102, 111, 111, 98, 97]);


var target = new Uint8Array([255, 255, 255, 255, 255]);
var result = target.setFromBase64('Zm9vYmE', { lastChunkHandling: 'stop-before-partial' });
assert.sameValue(result.read, 4);
assert.sameValue(result.written, 3);
assert.compareArray(target, [102, 111, 111, 255, 255]);


var target = new Uint8Array([255, 255, 255, 255, 255, 255, 255]);
var result = target.setFromBase64('Zm9vYmFy');
assert.sameValue(result.read, 8);
assert.sameValue(result.written, 6);
assert.compareArray(target, [102, 111, 111, 98, 97, 114, 255]);
