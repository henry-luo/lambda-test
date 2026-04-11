

/*---
esid: sec-error.prototype.tostring
description: Property descriptor of Error.prototype.toString
includes: [propertyHelper.js]
---*/

verifyProperty(Error.prototype, 'toString', {
  enumerable: false,
  writable: true,
  configurable: true,
});
