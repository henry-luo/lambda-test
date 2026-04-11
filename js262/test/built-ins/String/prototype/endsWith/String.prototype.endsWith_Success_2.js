

/*---
author: Ryan Lewis
description: >
    endsWith should return true when called on 'word' and passed 'd'
    and with an endPosition of 4.
features: [String.prototype.endsWith]
---*/

assert.sameValue('word'.endsWith('d', 4), true, '"word".endsWith("d", 4)');
