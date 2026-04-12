

/*---
es5id: 15.3.4.5-0-1
description: Function.prototype.bind must exist as a function
---*/

var f = Function.prototype.bind;

assert.sameValue(typeof(f), "function", 'typeof(f)');
