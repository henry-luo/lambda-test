

/*---
es5id: 15.5.4.20-2-8
description: >
    String.prototype.trim - argument 'this' is a number that converts
    to a string (value is negative number)
---*/

assert.sameValue(String.prototype.trim.call(-20), "-20", 'String.prototype.trim.call(-20)');
