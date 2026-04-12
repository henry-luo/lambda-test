

/*---
esid: sec-string.prototype.padstart
description: String#padStart should be writable, non-enumerable, and configurable
author: Jordan Harband
includes: [propertyHelper.js]
---*/

verifyProperty(String.prototype, 'padStart', {
  writable: true,
  enumerable: false,
  configurable: true,
});
