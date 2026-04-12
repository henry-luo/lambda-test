

/*---
es5id: 15.2.3.13-2-4
description: Object.isExtensible returns true for all built-in objects (Array)
---*/

var e = Object.isExtensible(Array);

assert.sameValue(e, true, 'e');
