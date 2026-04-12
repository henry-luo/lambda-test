

/*---
author: Ryan Lewis
description: >
    String should return true when called on 'word' and passed 'w' and
    the location 0.
features: [String.prototype.includes]
---*/

assert.sameValue('word'.includes('w', 0), true, '"word".includes("w", 0)');
