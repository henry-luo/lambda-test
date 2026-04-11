

/*---
esid: sec-let-and-const-declarations-runtime-semantics-evaluation
description: Assignment of function `name` attribute (FunctionExpression)
info: |
    LexicalBinding : BindingIdentifier Initializer

    ...
    3. If IsAnonymousFunctionDefinition(Initializer) is true, then
       a. Let value be NamedEvaluation of Initializer with argument bindingId
includes: [propertyHelper.js]
features: [explicit-resource-management]
---*/


Function.prototype[Symbol.dispose] = function () {}
{
    using xFn = function x() {};
    using fn = function() {};

    assert(xFn.name !== 'xFn');

    assert.sameValue(fn.name, 'fn');
    verifyNotEnumerable(fn, 'name');
    verifyNotWritable(fn, 'name');
    verifyConfigurable(fn, 'name');
}
