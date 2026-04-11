

/*---
esid: sec-let-and-const-declarations-runtime-semantics-evaluation
description: >
    Assignment of function `name` attribute (CoverParenthesizedExpression)
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
  await using xCover = (0, function() {});
  await using cover = (function() {});

  assert(xCover.name !== 'xCover');

  assert.sameValue(cover.name, 'cover');
  verifyNotEnumerable(cover, 'name');
  verifyNotWritable(cover, 'name');
  verifyConfigurable(cover, 'name');
});
