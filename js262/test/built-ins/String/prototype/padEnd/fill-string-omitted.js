

/*---
esid: sec-string.prototype.padend
description: String#padEnd should default to a fillString of " " when omitted
author: Jordan Harband
---*/

assert.sameValue('abc'.padEnd(5), 'abc  ');
assert.sameValue('abc'.padEnd(5, undefined), 'abc  ');
