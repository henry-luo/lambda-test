

/*---
esid: sec-asyncgeneratorfunction-length
description: >
  This is a data property with a value of 1. This property has the attributes
  { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [async-iteration]
---*/

var AsyncGeneratorFunction = Object.getPrototypeOf(async function* () {}).constructor;

verifyProperty(AsyncGeneratorFunction, "length", {
  value: 1,
  enumerable: false,
  writable: false,
  configurable: true,
});
