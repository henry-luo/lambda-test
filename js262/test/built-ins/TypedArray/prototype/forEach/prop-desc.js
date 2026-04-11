

/*---
esid: sec-%typedarray%.prototype.foreach
description: >
  "forEach" property of TypedArrayPrototype
info: |
  ES6 section 17: Every other data property described in clauses 18 through 26
  and in Annex B.2 has the attributes { [[Writable]]: true,
  [[Enumerable]]: false, [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js, testTypedArray.js]
features: [TypedArray]
---*/

var TypedArrayPrototype = TypedArray.prototype;

verifyProperty(TypedArrayPrototype, 'forEach', {
  writable: true,
  enumerable: false,
  configurable: true
});
