

/*---
esid: sec-string.prototype.padstart
description: String#padStart should default to a fillString of " " when omitted
author: Jordan Harband
---*/

assert.sameValue('abc'.padStart(5), '  abc');
assert.sameValue('abc'.padStart(5, undefined), '  abc');
