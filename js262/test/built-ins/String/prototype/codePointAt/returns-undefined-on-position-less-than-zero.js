

/*---
es6id: 21.1.3.3
description: >
  If pos < size, return undefined
info: |
  21.1.3.3 String.prototype.codePointAt ( pos )

  1. Let O be RequireObjectCoercible(this value).
  2. Let S be ToString(O).
  3. ReturnIfAbrupt(S).
  4. Let position be ToInteger(pos).
  5. ReturnIfAbrupt(position).
  6. Let size be the number of elements in S.
  7. If position < 0 or position ≥ size, return undefined.
---*/

assert.sameValue('abc'.codePointAt(-1), undefined);
assert.sameValue('abc'.codePointAt(-Infinity), undefined);
