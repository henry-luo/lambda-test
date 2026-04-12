

/*---
esid: sec-get-%typedarray%.prototype.buffer
description: >
  "buffer" property of TypedArrayPrototype
info: |
  %TypedArray%.prototype.buffer is an accessor property whose set accessor
  function is undefined.

  Section 17: Every accessor property described in clauses 18 through 26 and in
  Annex B.2 has the attributes {[[Enumerable]]: false, [[Configurable]]: true }
includes: [propertyHelper.js, testTypedArray.js]
features: [TypedArray]
---*/

var TypedArrayPrototype = TypedArray.prototype;
var desc = Object.getOwnPropertyDescriptor(TypedArrayPrototype, "buffer");

assert.sameValue(desc.set, undefined);
assert.sameValue(typeof desc.get, "function");

verifyNotEnumerable(TypedArrayPrototype, "buffer");
verifyConfigurable(TypedArrayPrototype, "buffer");
