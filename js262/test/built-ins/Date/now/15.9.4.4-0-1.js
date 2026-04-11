

/*---
esid: sec-date.now
description: Date.now must exist as a function
---*/

assert.sameValue(typeof Date.now, "function", 'typeof Date.now');
