

/*---
es5id: 15.2.3.9-3-1
description: Object.freeze - returned object is not extensible
---*/

var obj = {};
Object.freeze(obj);

assert.sameValue(Object.isExtensible(obj), false, 'Object.isExtensible(obj)');
