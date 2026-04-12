

/*---
es6id: 19.1.2.18
description: Object.setPrototypeOf invoked with a non-object-coercible value
info: |
    1. Let O be RequireObjectCoercible(O).
    2. ReturnIfAbrupt(O).
---*/

assert.throws(TypeError, function() {
  Object.setPrototypeOf(null);
});

assert.throws(TypeError, function() {
  Object.setPrototypeOf(undefined);
});
