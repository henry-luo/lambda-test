

/*---
esid: sec-promise.prototype
description: Property descriptor of 'prototype' property
info: |
  This property has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/

verifyProperty(Promise, 'prototype', {
  writable: false,
  enumerable: false,
  configurable: false,
});
