

/*---
es5id: 15.5.4.20-2-36
description: >
    String.prototype.trim - 'this' is a Boolean Object that converts
    to a string
---*/

assert.sameValue(String.prototype.trim.call(new Boolean(false)), "false", 'String.prototype.trim.call(new Boolean(false))');
