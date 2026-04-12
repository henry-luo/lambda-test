

/*---
author: Ryan Lewis
description: String should have the property length with size of 1.
features: [String.prototype.includes]
---*/
assert.sameValue('word'.includes.length, 1, '"word".includes.length');
