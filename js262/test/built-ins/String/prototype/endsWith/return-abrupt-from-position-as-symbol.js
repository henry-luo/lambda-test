

/*---
es6id: 21.1.3.6
description: >
  Returns abrupt from ToInteger(endPosition) as a Symbol.
info: |
  21.1.3.6 String.prototype.endsWith ( searchString [ , endPosition] )

  ...
  10. If endPosition is undefined, let pos be len, else let pos be
  ToInteger(endPosition).
  11. ReturnIfAbrupt(pos).
  ...
features: [Symbol, String.prototype.endsWith]
---*/

var position = Symbol();

assert.throws(TypeError, function() {
  ''.endsWith('', position);
});
