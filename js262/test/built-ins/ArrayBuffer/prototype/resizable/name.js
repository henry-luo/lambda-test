

/*---
esid: sec-get-arraybuffer.prototype.resizable
description: >
  get ArrayBuffer.prototype.resizable

  17 ECMAScript Standard Built-in Objects

  Functions that are specified as get or set accessor functions of built-in
  properties have "get " or "set " prepended to the property name string.

includes: [propertyHelper.js]
features: [resizable-arraybuffer]
---*/

var desc = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, 'resizable');

verifyProperty(desc.get, 'name', {
  value: 'get resizable',
  enumerable: false,
  writable: false,
  configurable: true
});
