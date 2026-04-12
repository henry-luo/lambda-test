

/*---
es5id: 15.2.3.13-2-5
description: Object.isExtensible returns true for all built-in objects (String)
---*/

var e = Object.isExtensible(String);

assert.sameValue(e, true, 'e');
