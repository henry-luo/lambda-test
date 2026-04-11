

/*---
author: Ryan Lewis
description: String should return false if a letter is not found in the word.
features: [String.prototype.includes]
---*/

assert.sameValue('word'.includes('a', 0), false, '"word".includes("a", 0)');
