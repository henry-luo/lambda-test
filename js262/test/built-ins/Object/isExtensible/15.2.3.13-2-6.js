

/*---
es5id: 15.2.3.13-2-6
description: Object.isExtensible returns true for all built-in objects (Boolean)
---*/

var e = Object.isExtensible(Boolean);

assert.sameValue(e, true, 'e');
