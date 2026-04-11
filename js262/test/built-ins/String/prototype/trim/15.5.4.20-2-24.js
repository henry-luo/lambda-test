

/*---
es5id: 15.5.4.20-2-24
description: >
    String.prototype.trim - argument 'this' is an integer that
    converts to a string (value is 123)
---*/

assert.sameValue(String.prototype.trim.call(123), "123", 'String.prototype.trim.call(123)');
