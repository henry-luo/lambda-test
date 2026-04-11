

/*---
esid: sec-string.prototype.padstart
description: String#padStart should stringify a non-string fillString value
author: Jordan Harband
---*/

assert.sameValue('abc'.padStart(10, false), 'falsefaabc');
assert.sameValue('abc'.padStart(10, true), 'truetruabc');
assert.sameValue('abc'.padStart(10, null), 'nullnulabc');
assert.sameValue('abc'.padStart(10, 0), '0000000abc');
assert.sameValue('abc'.padStart(10, -0), '0000000abc');
assert.sameValue('abc'.padStart(10, NaN), 'NaNNaNNabc');
