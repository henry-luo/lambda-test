

/*---
es5id: 15.2.3.6-4-620
description: >
    ES5 Attributes - all attributes in Array.prototype.reduceRight are
    correct
includes: [propertyHelper.js]
---*/

verifyProperty(Array.prototype, "reduceRight", {
  writable: true,
  enumerable: false,
  configurable: true,
});
