

/*---
es5id: 15.2.3.13-2-1
description: Object.isExtensible returns true for all built-in objects (Global)
---*/

var global = this;

assert(Object.isExtensible(global));
