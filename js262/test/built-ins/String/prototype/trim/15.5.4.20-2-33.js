

/*---
es5id: 15.5.4.20-2-33
description: String.prototype.trim - argument 'this' is a string(value is '1')
---*/

assert.sameValue(String.prototype.trim.call("1"), "1", 'String.prototype.trim.call("1")');
