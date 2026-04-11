

/*---
es5id: 15.2.3.2-1-3
description: Object.getPrototypeOf returns Boolean.prototype if 'O' is a boolean
---*/

assert.sameValue(Object.getPrototypeOf(true), Boolean.prototype, 'Object.getPrototypeOf(true)');
