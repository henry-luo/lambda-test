

/*---
author: Ryan Lewis
description: >
    endsWith should return false when called on 'word' and passed 'd',
    with an endPosition of 3.
features: [String.prototype.endsWith]
---*/

assert.sameValue('word'.endsWith('d', 3), false, '"word".endsWith("d", 3)');
