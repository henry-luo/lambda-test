

/*---
es6id: 13.3.3.5
description: >
  Cannot convert null argument value to object
info: |
  13.3.3.5 Runtime Semantics: BindingInitialization

  BindingPattern : ObjectBindingPattern

  1. Let valid be RequireObjectCoercible(value).
  2. ReturnIfAbrupt(valid).
features: [destructuring-binding]
---*/

function fn({}) {}

assert.throws(TypeError, function() {
  fn(null);
});
