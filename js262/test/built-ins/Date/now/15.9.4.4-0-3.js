

/*---
esid: sec-date.now
description: Date.now must exist as a function
---*/

var fun = Date.now;

assert.sameValue(typeof(fun), "function", 'typeof (fun)');
