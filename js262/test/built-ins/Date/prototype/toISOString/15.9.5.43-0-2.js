

/*---
esid: sec-date.prototype.toisostring
description: >
    Date.prototype.toISOString must exist as a function taking 0
    parameters
---*/

assert.sameValue(Date.prototype.toISOString.length, 0, 'Date.prototype.toISOString.length');
