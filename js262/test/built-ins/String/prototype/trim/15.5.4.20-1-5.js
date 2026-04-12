

/*---
es5id: 15.5.4.20-1-5
description: String.prototype.trim works for an Object
---*/

assert.sameValue(String.prototype.trim.call({}), "[object Object]", 'String.prototype.trim.call({})');
