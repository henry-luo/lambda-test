

/*---
esid: sec-string.prototype.padstart
description: String#padStart should have length 1
author: Jordan Harband
includes: [propertyHelper.js]
---*/

verifyProperty(String.prototype.padStart, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
