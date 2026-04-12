

/*---
author: Ryan Lewis
description: >
    String should return true when called on 'word' and passed 'w' and
    with no location (defaults to 0).
features: [String.prototype.includes]
---*/

assert.sameValue('word'.includes('w'), true, '"word".includes("w")');
