

/*---
es5id: 15.2.3.9-2-1
description: >
    Object.freeze - extensible of 'O' is set as false even if 'O' has
    no own property
---*/

var obj = {};

Object.freeze(obj);

assert.sameValue(Object.isExtensible(obj), false, 'Object.isExtensible(obj)');
