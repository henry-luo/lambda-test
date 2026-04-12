

/*---
esid: sec-uint8array.fromhex
description: Uint8Array.fromHex throws if its argument is not a string
features: [uint8array-base64, TypedArray]
---*/

var toStringCalls = 0;
var throwyToString = {
  toString: function() {
    toStringCalls += 1;
    throw new Test262Error("toString called");
  }
};

assert.throws(TypeError, function() {
  Uint8Array.fromHex(throwyToString);
});
assert.sameValue(toStringCalls, 0);
