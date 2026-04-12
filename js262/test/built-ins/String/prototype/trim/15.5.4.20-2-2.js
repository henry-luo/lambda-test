

/*---
es5id: 15.5.4.20-2-2
description: >
    String.prototype.trim - argument 'this' is a boolean whose value
    is true
---*/

assert.sameValue(String.prototype.trim.call(true), "true", 'String.prototype.trim.call(true)');
