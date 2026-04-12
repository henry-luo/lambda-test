

/*---
esid: sec-let-and-const-declarations-runtime-semantics-evaluation
description: Assignment of function `name` attribute (GeneratorExpression)
info: |
    LexicalBinding : BindingIdentifier Initializer

    ...
    3. If IsAnonymousFunctionDefinition(Initializer) is true, then
       a. Let value be NamedEvaluation of Initializer with argument bindingId

flags: [async]
includes: [propertyHelper.js, asyncHelpers.js]
features: [generators,explicit-resource-management]
---*/


Function.prototype[Symbol.dispose] = function () {}
asyncTest(async function() {
    await using xGen = function* x() {};
    await using gen = function*() {};

    assert(xGen.name !== 'xGen');

    assert.sameValue(gen.name, 'gen');
    verifyNotEnumerable(gen, 'name');
    verifyNotWritable(gen, 'name');
    verifyConfigurable(gen, 'name');
});
