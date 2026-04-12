

/*---
es6id: 22.2.2.1
description: >
  "from" property of TypedArray
info: |
  ES6 section 17: Every other data property described in clauses 18 through 26
  and in Annex B.2 has the attributes { [[Writable]]: true,
  [[Enumerable]]: false, [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js, testTypedArray.js]
features: [TypedArray]
---*/

verifyProperty(TypedArray, 'from', {
  writable: true,
  enumerable: false,
  configurable: true
});
