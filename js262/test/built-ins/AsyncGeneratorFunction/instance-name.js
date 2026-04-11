

/*---
esid: sec-asyncgeneratorfunction
description: Assignment of function `name` attribute
info: |
    AsyncGeneratorFunction ( p1, p2, … , pn, body )
    ...
    3. Return CreateDynamicFunction(C, NewTarget, "async generator", args).

    RuntimeSemantics: CreateDynamicFunction(constructor, newTarget, kind, args)
    ...
    29. Perform SetFunctionName(F, "anonymous").
includes: [propertyHelper.js]
features: [async-iteration]
---*/

var AsyncGeneratorFunction = Object.getPrototypeOf(async function* () {}).constructor;

var instance = AsyncGeneratorFunction()

verifyProperty(instance, "name", {
  value: "anonymous",
  enumerable: false,
  writable: false,
  configurable: true,
});
