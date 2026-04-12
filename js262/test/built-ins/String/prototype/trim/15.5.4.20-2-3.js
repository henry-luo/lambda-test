

/*---
es5id: 15.5.4.20-2-3
description: >
    String.prototype.trim - argument 'this' is a number that converts
    to a string (value is NaN)
---*/

assert.sameValue(String.prototype.trim.call(NaN), "NaN", 'String.prototype.trim.call(NaN)');
