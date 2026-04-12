

/*---
esid: sec-get-sharedarraybuffer.prototype.growable
description: >
  get SharedArrayBuffer.prototype.growable

  17 ECMAScript Standard Built-in Objects

  Functions that are specified as get or set accessor functions of built-in
  properties have "get " or "set " prepended to the property name string.

includes: [propertyHelper.js]
features: [SharedArrayBuffer, resizable-arraybuffer]
---*/

var desc = Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype, 'growable');

verifyProperty(desc.get, 'name', {
  value: 'get growable',
  enumerable: false,
  writable: false,
  configurable: true
});
