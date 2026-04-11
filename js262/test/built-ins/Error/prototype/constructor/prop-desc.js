

/*---
esid: sec-error.prototype.constructor
description: Property descriptor of Error.prototype.constructor
includes: [propertyHelper.js]
---*/

verifyProperty(Error.prototype, 'constructor', {
  enumerable: false,
  writable: true,
  configurable: true,
  value: Error
});
