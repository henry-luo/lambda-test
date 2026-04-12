

/*---
es5id: 15.2.3.13-2-7
description: Object.isExtensible returns true for all built-in objects (Number)
---*/

var e = Object.isExtensible(Number);

assert.sameValue(e, true, 'e');
