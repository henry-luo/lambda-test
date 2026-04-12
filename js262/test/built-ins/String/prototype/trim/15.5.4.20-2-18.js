

/*---
es5id: 15.5.4.20-2-18
description: >
    String.prototype.trim - argument 'this' is a number that converts
    to a string (value is 0.000001)
---*/

assert.sameValue(String.prototype.trim.call(0.000001), "0.000001", 'String.prototype.trim.call(0.000001)');
