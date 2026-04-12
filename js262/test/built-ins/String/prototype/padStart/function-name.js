

/*---
esid: sec-string.prototype.padstart
description: String#padStart should have name property with value 'padStart'
author: Jordan Harband
includes: [propertyHelper.js]
---*/

verifyProperty(String.prototype.padStart, "name", {
  value: "padStart",
  writable: false,
  enumerable: false,
  configurable: true
});
