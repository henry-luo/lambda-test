

/*---
esid: sec-properties-of-the-generatorfunction-prototype-object
description: Object extensibility
info: |
  The initial value of the [[Extensible]] internal slot of the
  GeneratorFunction prototype object is true.
features: [generators]
---*/

var GeneratorFunction = Object.getPrototypeOf(function*() {}).constructor;

assert(Object.isExtensible(GeneratorFunction.prototype));
