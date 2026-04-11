

/*---
es5id: 15.5.4.20-3-9
description: String.prototype.trim - 'S' is a string with null character ('\0')
---*/

assert.sameValue("\0".trim(), "\0", '"\0".trim()');
