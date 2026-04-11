

/*---
es6id: 25.4.5.1
description: GeneratorFunction.prototype property descriptor
info: |
  This property has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: false }.
includes: [propertyHelper.js]
features: [generators]
---*/

var GeneratorFunction = Object.getPrototypeOf(function*() {}).constructor;

verifyProperty(GeneratorFunction, 'prototype', {
  writable: false,
  enumerable: false,
  configurable: false,
});
