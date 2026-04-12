

/*---
es5id: 15.2.3.13-2-29
description: Object.isExtensible returns true for the global object
---*/

assert(Object.isExtensible(this), 'Object.isExtensible(this) !== true');
