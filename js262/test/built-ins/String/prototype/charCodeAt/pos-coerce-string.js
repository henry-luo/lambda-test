

/*---
esid: sec-string.prototype.charcodeat
description: Coercion of "pos" string value into number
info: |
  [...]
  3. Let position be ? ToInteger(pos).
  [...]

  7.1.4 ToInteger

  1. Let number be ? ToNumber(argument).
---*/

var cCode = 99;

assert.sameValue('abcd'.charCodeAt('   +00200.0000E-0002   '), cCode);
