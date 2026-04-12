

/*---
author: Ryan Lewis
description: endsWith should return false when called on 'word' and passed 'r'.
features: [String.prototype.endsWith]
---*/

assert.sameValue('word'.endsWith('r'), false, '"word".endsWith("r")');
