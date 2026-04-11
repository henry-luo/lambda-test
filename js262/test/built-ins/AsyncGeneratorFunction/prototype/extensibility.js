

/*---
esid: sec-properties-of-asyncgenerator-prototype
description: Object extensibility
info: |
  The initial value of the [[Extensible]] internal slot of the
  AsyncGeneratorFunction prototype object is true.
features: [async-iteration]
---*/

var AsyncGeneratorFunction = Object.getPrototypeOf(async function* () {}).constructor;

assert(Object.isExtensible(AsyncGeneratorFunction.prototype));
