

/*---
author: Ryan Lewis
description: >
    endsWith should return true when called on 'word' and passed 'd'
    and with an endPosition of 25.
features: [String.prototype.endsWith]
---*/

assert.sameValue('word'.endsWith('d', 25), true, '"word".endsWith("d", 25)');
