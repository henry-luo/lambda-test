

/*---
es5id: 15.2.3.13-2-23
description: Object.isExtensible returns false if 'O' is not extensible
---*/

var obj = {};
Object.preventExtensions(obj);

assert.sameValue(Object.isExtensible(obj), false, 'Object.isExtensible(obj)');
