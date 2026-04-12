

/*---
es5id: 15.3.4.5-2-9
description: Function.prototype.bind allows Target to be a constructor (Date)
---*/

var bdc = Date.bind(null);
var s = bdc(0, 0, 0);

assert.sameValue(typeof(s), 'string', 'typeof(s)');
