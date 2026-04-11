

/*---
esid: sec-string.prototype.padend
description: String#padEnd should be writable, non-enumerable, and configurable
author: Jordan Harband
includes: [propertyHelper.js]
---*/

verifyProperty(String.prototype, 'padEnd', {
  writable: true,
  enumerable: false,
  configurable: true,
});
