

/*---
es5id: 15.5.4.20-4-60
description: >
    String.prototype.trim handles whitepace and lineterminators
    (string with just blanks)
---*/

assert.sameValue("    ".trim(), "", '"    ".trim()');
