

/*---
es6id: 19.2.1.1
description: Assignment of function `name` attribute
info: |
    [...]
    3. Return CreateDynamicFunction(C, NewTarget, "normal", args).

    ES6 19.2.1.1.1
        RuntimeSemantics: CreateDynamicFunction(constructor, newTarget, kind, args)

    [...]
    29. Perform SetFunctionName(F, "anonymous").
includes: [propertyHelper.js]
---*/

assert.sameValue(Function().name, 'anonymous');
verifyNotEnumerable(Function(), 'name');
verifyNotWritable(Function(), 'name');
verifyConfigurable(Function(), 'name');
