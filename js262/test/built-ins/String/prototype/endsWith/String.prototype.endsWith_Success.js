

/*---
author: Ryan Lewis
description: >
    endsWith should return true when called on 'word' and passed 'd'
    and with no endPosition (defaults to 4).
features: [String.prototype.endsWith]
---*/

assert.sameValue('word'.endsWith('d'), true, '"word".endsWith("d")');
