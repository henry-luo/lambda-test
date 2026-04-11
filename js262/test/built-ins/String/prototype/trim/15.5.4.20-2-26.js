

/*---
es5id: 15.5.4.20-2-26
description: >
    String.prototype.trim - argument 'this' is a number that converts
    to a string (value is 1(following 20 zeros).123)
---*/

assert.sameValue(String.prototype.trim.call(100000000000000000000.123), "100000000000000000000", 'String.prototype.trim.call(100000000000000000000.123)');
