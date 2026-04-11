

/*---
es5id: 15.2.3.2-2-31
description: Object.getPrototypeOf returns null
---*/

assert.sameValue(Object.getPrototypeOf(Object.prototype), null, 'Object.getPrototypeOf(Object.prototype)');
