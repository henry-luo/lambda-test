

/*---
es5id: 15.5.4.20-2-35
description: >
    String.prototype.trim - 'this' is a String Object that converts to
    a string
---*/

assert.sameValue(String.prototype.trim.call(new String("abc")), "abc", 'String.prototype.trim.call(new String("abc"))');
