

/*---
es5id: 15.2.3.13-2-17
description: >
    Object.isExtensible returns true for all built-in objects
    (Boolean.prototype)
---*/

var e = Object.isExtensible(Boolean.prototype);

assert.sameValue(e, true, 'e');
