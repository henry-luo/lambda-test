

/*---
es5id: 15.5.4.20-2-13
description: >
    String.prototype.trim - argument 'this' is a number that converts
    to a string (value is 1(following 21 zeros))
---*/

assert.sameValue(String.prototype.trim.call(1000000000000000000000), "1e+21", 'String.prototype.trim.call(1000000000000000000000)');
