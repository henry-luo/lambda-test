

/*---
esid: sec-asyncgeneratorfunction-prototype-tostringtag
description: >
    `Symbol.toStringTag` property descriptor
info: |
  The initial value of the @@toStringTag property is the String
  value "AsyncGeneratorFunction".

  This property has the attributes { [[Writable]]: false,
  [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [async-iteration, Symbol.toStringTag]
---*/

var AsyncGeneratorFunctionPrototype = Object.getPrototypeOf(async function*() {});

verifyProperty(AsyncGeneratorFunctionPrototype, Symbol.toStringTag, {
  value: 'AsyncGeneratorFunction',
  enumerable: false,
  writable: false,
  configurable: true,
});
