

/*---
es5id: 15.2.3.13-2-16
description: >
    Object.isExtensible returns true for all built-in objects
    (String.prototype)
---*/

var e = Object.isExtensible(String.prototype);

assert.sameValue(e, true, 'e');
