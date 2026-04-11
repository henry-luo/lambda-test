

/*---
es5id: 15.5.4.20-2-1
description: >
    String.prototype.trim - argument 'this' is a boolean whose value
    is false
---*/

assert.sameValue(String.prototype.trim.call(false), "false", 'String.prototype.trim.call(false)');
