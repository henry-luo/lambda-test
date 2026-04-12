

/*---
es5id: 15.5.4.20-1-3
description: String.prototype.trim works for primitive type boolean
---*/

assert.sameValue(String.prototype.trim.call(true), "true", 'String.prototype.trim.call(true)');
