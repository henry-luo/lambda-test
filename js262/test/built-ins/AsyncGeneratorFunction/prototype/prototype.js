

/*---
esid: sec-asyncgeneratorfunction-prototype-prototype
description: >
    The value of AsyncGeneratorFunction.prototype.prototype is the
    %AsyncGeneratorPrototype% intrinsic object.

    This property has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [async-iteration]
---*/

var AsyncGeneratorFunctionPrototype = Object.getPrototypeOf(async function*() {});

assert.sameValue(
  AsyncGeneratorFunctionPrototype.prototype,
  Object.getPrototypeOf(async function*() {}.prototype)
);

verifyProperty(AsyncGeneratorFunctionPrototype, "prototype", {
  enumerable: false,
  writable: false,
  configurable: true,
});
