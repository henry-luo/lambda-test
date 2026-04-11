

/*---
es5id: 15.5.4.20-1-6
description: String.prototype.trim works for an String
---*/

assert.sameValue(String.prototype.trim.call(new String()), "", 'String.prototype.trim.call(new String())');
