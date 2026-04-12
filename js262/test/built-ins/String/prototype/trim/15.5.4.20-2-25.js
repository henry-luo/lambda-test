

/*---
es5id: 15.5.4.20-2-25
description: >
    String.prototype.trim - argument 'this' is a decimal that converts
    to a string (value is 123.456)
---*/

assert.sameValue(String.prototype.trim.call(123.456), "123.456", 'String.prototype.trim.call(123.456)');
