

/*---
author: Ryan Lewis
description: >
    String should return false if a letter is not found in the word
    starting from the passed location.
features: [String.prototype.includes]
---*/

assert.sameValue('word'.includes('o', 3), false, '"word".includes("o", 3)');
