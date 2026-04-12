

/*---
esid: sec-generatorfunction.length
description: >
  This is a data property with a value of 1. This property has the attributes {
  [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [generators]
---*/

var GeneratorFunction = Object.getPrototypeOf(function*() {}).constructor;

verifyProperty(GeneratorFunction, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
