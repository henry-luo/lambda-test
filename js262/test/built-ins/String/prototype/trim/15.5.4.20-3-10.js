

/*---
es5id: 15.5.4.20-3-10
description: >
    String.prototype.trim - 'S' is a string with null character
    ('\u0000')
---*/

assert.sameValue("\u0000".trim(), "\u0000", '"\u0000".trim()');
