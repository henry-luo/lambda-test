

/*---
es5id: 15.5.4.20-2-7
description: >
    String.prototype.trim - argument 'this' is a number that converts
    to a string (value is positive number)
---*/

assert.sameValue(String.prototype.trim.call(30), "30", 'String.prototype.trim.call(30)');
