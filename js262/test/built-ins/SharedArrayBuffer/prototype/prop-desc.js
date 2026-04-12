

/*---
esid: sec-sharedarraybuffer.prototype
description: Property descriptor of the 'prototype' property
info: |
  This property has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: false }.
includes: [propertyHelper.js]
features: [SharedArrayBuffer]
---*/

verifyProperty(SharedArrayBuffer, 'prototype', {
    enumerable: false,
    writable: false,
    configurable: false
});
