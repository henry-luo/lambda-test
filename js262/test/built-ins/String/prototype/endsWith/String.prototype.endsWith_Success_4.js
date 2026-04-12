

/*---
author: Ryan Lewis
description: >
    endsWith should return true when called on 'word' and passed 'r',
    with an endPosition of 3.
features: [String.prototype.endsWith]
---*/

assert.sameValue('word'.endsWith('r', 3), true, '"word".endsWith("r", 3)');
