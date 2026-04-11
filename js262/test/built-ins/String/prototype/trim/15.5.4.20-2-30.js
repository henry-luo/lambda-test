

/*---
es5id: 15.5.4.20-2-30
description: >
    String.prototype.trim - argument 'this' is a string(value is
    'undefined')
---*/

assert.sameValue(String.prototype.trim.call("undefined"), "undefined", 'String.prototype.trim.call("undefined")');
