

/*---
esid: sec-string.prototype.padstart
description: String#padStart should work in the general case
author: Jordan Harband
---*/

assert.sameValue('abc'.padStart(7, 'def'), 'defdabc');
assert.sameValue('abc'.padStart(5, '*'), '**abc');


assert.sameValue('abc'.padStart(6, '\uD83D\uDCA9'), '\uD83D\uDCA9\uD83Dabc');
