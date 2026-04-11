

/*---
es5id: 15.5.4.20-1-4
description: String.prototype.trim works for primitive type number
---*/

assert.sameValue(String.prototype.trim.call(0), "0", 'String.prototype.trim.call(0)');
