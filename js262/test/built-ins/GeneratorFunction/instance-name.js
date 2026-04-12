

/*---
es6id: 25.2.1.1
description: Assignment of function `name` attribute
info: |
    [...]
    3. Return CreateDynamicFunction(C, NewTarget, "generator", args).

    ES6 19.2.1.1.1
        RuntimeSemantics: CreateDynamicFunction(constructor, newTarget, kind, args)

    [...]
    29. Perform SetFunctionName(F, "anonymous").
includes: [propertyHelper.js]
features: [generators]
---*/

var GeneratorFunction = Object.getPrototypeOf(function*() {}).constructor;

assert.sameValue(GeneratorFunction().name, 'anonymous');
verifyNotEnumerable(GeneratorFunction(), 'name');
verifyNotWritable(GeneratorFunction(), 'name');
verifyConfigurable(GeneratorFunction(), 'name');
