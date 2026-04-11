

/*---
esid: sec-string.prototype.padend
description: String#padEnd should have name property with value 'padEnd'
author: Jordan Harband
includes: [propertyHelper.js]
---*/

verifyProperty(String.prototype.padEnd, "name", {
  value: "padEnd",
  writable: false,
  enumerable: false,
  configurable: true
});
