

/*---
esid: sec-error.prototype.name
description: Property descriptor of Error.prototype.name
includes: [propertyHelper.js]
---*/

verifyProperty(Error.prototype, 'name', {
  enumerable: false,
  writable: true,
  configurable: true,
  value: 'Error'
});
