

/*---
es5id: 15.2.3.13-2-8
description: Object.isExtensible returns true for all built-in objects (Math)
---*/

var e = Object.isExtensible(Math);

assert.sameValue(e, true, 'e');
