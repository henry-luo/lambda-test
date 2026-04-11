

/*---
esid: sec-string.prototype.padstart
description: >
  String#padStart should return the string unchanged when an integer max
  length is not greater than the string length
author: Jordan Harband
---*/

assert.sameValue('abc'.padStart(undefined, 'def'), 'abc');
assert.sameValue('abc'.padStart(null, 'def'), 'abc');
assert.sameValue('abc'.padStart(NaN, 'def'), 'abc');
assert.sameValue('abc'.padStart(-Infinity, 'def'), 'abc');
assert.sameValue('abc'.padStart(0, 'def'), 'abc');
assert.sameValue('abc'.padStart(-1, 'def'), 'abc');
assert.sameValue('abc'.padStart(3, 'def'), 'abc');
assert.sameValue('abc'.padStart(3.9999, 'def'), 'abc');
