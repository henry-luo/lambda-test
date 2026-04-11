

/*---
es5id: 15.5.4.20-1-7
description: String.prototype.trim works for a primitive string
---*/

assert.sameValue(String.prototype.trim.call("abc"), "abc", 'String.prototype.trim.call("abc")');
