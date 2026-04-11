

/*---
esid: sec-asyncgenerator-definitions-evaluatebody
description: >
    The generator object is created after FunctionDeclarationInstantiation.
info: |
    14.5.10 Runtime Semantics: EvaluateBody

    1. Perform ? FunctionDeclarationInstantiation(functionObject, argumentsList).
    2. Let generator be ? OrdinaryCreateFromConstructor(functionObject, "%AsyncGeneratorPrototype%",
       « [[AsyncGeneratorState]], [[AsyncGeneratorContext]], [[AsyncGeneratorQueue]] »).
    3. Perform ! AsyncGeneratorStart(generator, FunctionBody).
    ...

features: [async-iteration]
---*/

var g = async function*(a = (g.prototype = null)) {}
var oldPrototype = g.prototype;
var it = g();

assert.notSameValue(Object.getPrototypeOf(it), oldPrototype);
