

/*---
esid: sec-string.prototype.padend
description: String#padEnd should work in the general case
author: Jordan Harband
---*/

assert.sameValue('abc'.padEnd(7, 'def'), 'abcdefd');
assert.sameValue('abc'.padEnd(5, '*'), 'abc**');


assert.sameValue('abc'.padEnd(6, '\uD83D\uDCA9'), 'abc\uD83D\uDCA9\uD83D');
