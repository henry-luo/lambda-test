

/*---
esid: sec-get-arraybuffer.prototype.detached
description: >
  get ArrayBuffer.prototype.detached

  17 ECMAScript Standard Built-in Objects

  Functions that are specified as get or set accessor functions of built-in
  properties have "get " or "set " prepended to the property name string.

includes: [propertyHelper.js]
features: [ArrayBuffer, arraybuffer-transfer]
---*/

var desc = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, 'detached');

verifyProperty(desc.get, 'name', {
  value: 'get detached',
  enumerable: false,
  writable: false,
  configurable: true
});
