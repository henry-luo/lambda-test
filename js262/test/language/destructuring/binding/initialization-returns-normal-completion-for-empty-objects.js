

/*---
es6id: 13.3.3.5
description: >
  Normal completion when initializing an empty ObjectBindingPattern
info: |
  13.3.3.5 Runtime Semantics: BindingInitialization

  BindingPattern : ObjectBindingPattern

  ...
  3. Return the result of performing BindingInitialization for
  ObjectBindingPattern using value and environment as arguments.

  ObjectBindingPattern : { }

  1. Return NormalCompletion(empty).

features: [destructuring-binding]
---*/

function fn({}) { return true; }

assert(fn(0));
assert(fn(NaN));
assert(fn(''));
assert(fn(false));
assert(fn({}));
assert(fn([]));
