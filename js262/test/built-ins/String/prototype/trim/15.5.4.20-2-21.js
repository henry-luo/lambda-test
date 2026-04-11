

/*---
es5id: 15.5.4.20-2-21
description: >
    String.prototype.trim - argument 'this' is a number that converts
    to a string (value is 1e-7)
---*/

assert.sameValue(String.prototype.trim.call(1e-7), "1e-7", 'String.prototype.trim.call(1e-7)');
