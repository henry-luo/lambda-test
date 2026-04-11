

/*---
es5id: 15.5.4.20-0-2
description: String.prototype.trim must exist as a function taking 0 parameters
---*/

assert.sameValue(String.prototype.trim.length, 0, 'String.prototype.trim.length');
