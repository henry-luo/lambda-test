

/*---
esid: sec-uint8array.prototype.tobase64
description: Uint8Array.prototype.toBase64 throws if the receiver is not a Uint8Array
includes: [testTypedArray.js]
features: [uint8array-base64, TypedArray]
---*/

var toBase64 = Uint8Array.prototype.toBase64;

var options = {};
Object.defineProperty(options, "alphabet", {
  get: function() {
    throw new Test262Error("options.alphabet accessed despite incompatible receiver");
  }
});

testWithTypedArrayConstructors(function(TA, makeCtorArg) {
  if (TA === Uint8Array) return;
  var sample = new TA(makeCtorArg(2));
  assert.throws(TypeError, function() {
    Uint8Array.prototype.toBase64.call(sample, options);
  });
}, null, ["passthrough"]);

assert.throws(TypeError, function() {
  Uint8Array.prototype.toBase64.call([], options);
}, null, ["passthrough"]);

assert.throws(TypeError, function() {
  toBase64(options);
}, null, ["passthrough"]);
