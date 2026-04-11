

/*---
es5id: 15.5.4.20-2-31
description: >
    String.prototype.trim - argument 'this' is a string(value is
    'null')
---*/

assert.sameValue(String.prototype.trim.call("null"), "null", 'String.prototype.trim.call("null")');
