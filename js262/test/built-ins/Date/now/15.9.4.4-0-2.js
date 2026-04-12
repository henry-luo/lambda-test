

/*---
esid: sec-date.now
description: Date.now must exist as a function taking 0 parameters
---*/

assert.sameValue(Date.now.length, 0, 'Date.now.length');
