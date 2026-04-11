

/*---
es5id: 15.2.3.12-2-a-14
description: Object.isFrozen - 'O' is an Array object
---*/

var obj = [2];
obj.len = 200;

Object.preventExtensions(obj);

assert.sameValue(Object.isFrozen(obj), false, 'Object.isFrozen(obj)');
