

/*---
description: >
  "byteLength" property of SharedArrayBuffer.prototype
includes: [propertyHelper.js]
features: [SharedArrayBuffer]
---*/

var desc = Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype, "byteLength");

assert.sameValue(desc.set, undefined);
assert.sameValue(typeof desc.get, "function");

verifyNotEnumerable(SharedArrayBuffer.prototype, "byteLength");
verifyConfigurable(SharedArrayBuffer.prototype, "byteLength");
