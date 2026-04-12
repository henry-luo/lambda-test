

/*---
es5id: 15.5.4.20-3-11
description: >
    String.prototype.trim - 'S' is a string that starts with null
    character
---*/

assert.sameValue("\0\u0000abc".trim(), "\0\u0000abc", '"\0\u0000abc".trim()');
