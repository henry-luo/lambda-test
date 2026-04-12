

/*---
esid: sec-uint8array.prototype.tobase64
description: Conversion of Uint8Arrays to base64 strings exercising the omitPadding option
features: [uint8array-base64, TypedArray]
---*/


assert.sameValue((new Uint8Array([199, 239])).toBase64(), "x+8=");
assert.sameValue((new Uint8Array([199, 239])).toBase64({ omitPadding: false }), "x+8=");
assert.sameValue((new Uint8Array([199, 239])).toBase64({ omitPadding: true }), "x+8");
assert.sameValue((new Uint8Array([255])).toBase64({ omitPadding: true }), "/w");


assert.sameValue((new Uint8Array([199, 239])).toBase64({ alphabet: "base64url" }), "x-8=");
assert.sameValue((new Uint8Array([199, 239])).toBase64({ alphabet: "base64url", omitPadding: false }), "x-8=");
assert.sameValue((new Uint8Array([199, 239])).toBase64({ alphabet: "base64url", omitPadding: true }), "x-8");
assert.sameValue((new Uint8Array([255])).toBase64({ alphabet: "base64url", omitPadding: true }), "_w");


assert.sameValue((new Uint8Array([255])).toBase64({ omitPadding: 0 }), "/w==");
assert.sameValue((new Uint8Array([255])).toBase64({ omitPadding: 1 }), "/w");
