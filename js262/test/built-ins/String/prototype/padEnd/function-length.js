

/*---
esid: sec-string.prototype.padend
description: String#padEnd should have length 1
author: Jordan Harband
includes: [propertyHelper.js]
---*/

verifyProperty(String.prototype.padEnd, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
