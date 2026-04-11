

/*---
es5id: 15.5.4.20-2-28
description: String.prototype.trim - argument 'this' is an empty string
---*/

assert.sameValue(String.prototype.trim.call(""), "", 'String.prototype.trim.call("")');
