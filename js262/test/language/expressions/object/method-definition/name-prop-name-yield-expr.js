

/*---
description: >
    When the `yield` keyword occurs within the PropertyName of a
    non-generator MethodDefinition within a generator function, it behaves as a
    YieldExpression.
es6id: 14.3
features: [generators]
flags: [noStrict]
---*/

var obj = null;
var yield = 'propNameViaIdentifier';
var iter = (function*() {
  obj = {
    [yield]() {}
  };
})();

iter.next();

assert.sameValue(obj, null);

iter.next('propNameViaExpression');

assert(
  !Object.prototype.hasOwnProperty.call(obj, 'propNameViaIdentifier'),
  "The property name is not taken from the 'yield' variable"
);
assert(
  Object.prototype.hasOwnProperty.call(obj, 'propNameViaExpression'),
  "The property name is taken from the yield expression"
);
