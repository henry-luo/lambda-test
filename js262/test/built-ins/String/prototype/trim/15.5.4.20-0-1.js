

/*---
es5id: 15.5.4.20-0-1
description: String.prototype.trim must exist as a function
---*/

var f = String.prototype.trim;

assert.sameValue(typeof(f), "function", 'typeof(f)');
