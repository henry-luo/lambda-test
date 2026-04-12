

/*---
esid: sec-%typedarray%
description: >
  "prototype" property of TypedArray
info: |
  22.2.2.3 %TypedArray%.prototype

  This property has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: false }.
includes: [propertyHelper.js, testTypedArray.js]
features: [TypedArray]
---*/

verifyProperty(TypedArray, 'prototype', {
  writable: false,
  enumerable: false,
  configurable: false,
});
