

/*---
esid: sec-let-and-const-declarations-runtime-semantics-evaluation
description: Assignment of function `name` attribute (ArrowFunction)
info: |
    LexicalBinding : BindingIdentifier Initializer

    ...
    3. If IsAnonymousFunctionDefinition(Initializer) is true, then
       a. Let value be NamedEvaluation of Initializer with argument bindingId

flags: [async]
includes: [propertyHelper.js, asyncHelpers.js]
features: [explicit-resource-management]
---*/


Function.prototype[Symbol.dispose] = function () {}
asyncTest(async function () {
  await using arrow = () => {};

  assert.sameValue(arrow.name, 'arrow');
  verifyNotEnumerable(arrow, 'name');
  verifyNotWritable(arrow, 'name');
  verifyConfigurable(arrow, 'name');
});
