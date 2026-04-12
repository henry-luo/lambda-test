

/*---
esid: sec-error.prototype.message
description: Property descriptor of Error.prototype.message
includes: [propertyHelper.js]
---*/

verifyProperty(Error.prototype, 'message', {
  enumerable: false,
  writable: true,
  configurable: true,
  value: ''
});
