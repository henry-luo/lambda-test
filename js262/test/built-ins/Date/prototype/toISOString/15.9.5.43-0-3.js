

/*---
esid: sec-date.prototype.toisostring
description: Date.prototype.toISOString must exist as a function
---*/

assert.sameValue(typeof(Date.prototype.toISOString), "function", 'typeof (Date.prototype.toISOString)');
