

/*---
es6id: 21.1.3.3
description: >
  Returns abrupt from ToInteger(pos)
info: |
  21.1.3.3 String.prototype.codePointAt ( pos )

  1. Let O be RequireObjectCoercible(this value).
  2. Let S be ToString(O).
  3. ReturnIfAbrupt(S).
  4. Let position be ToInteger(pos).
  5. ReturnIfAbrupt(position).
features: [Symbol]
---*/

var s = Symbol(1);

assert.throws(TypeError, function() {
  'abc'.codePointAt(s);
});
