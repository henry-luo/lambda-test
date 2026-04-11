

/*---
es5id: 15.5.4.20-2-37
description: >
    String.prototype.trim - 'this' is a Number Object that converts to
    a string
---*/

assert.sameValue(String.prototype.trim.call(new Number(123)), "123", 'String.prototype.trim.call(new Number(123))');
