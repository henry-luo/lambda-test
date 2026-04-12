

/*---
es6id: 21.1.3.13
description: >
  Returns abrupt from ToInteger(count) where count is a Symbol
info: |
  21.1.3.13 String.prototype.repeat ( count )

  4. Let n be ToInteger(count).
  5. ReturnIfAbrupt(n).
features: [Symbol]
---*/

var s = Symbol('');

assert.throws(TypeError, function() {
  ''.repeat(s);
});
