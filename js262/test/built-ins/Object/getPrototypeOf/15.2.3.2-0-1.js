

/*---
es5id: 15.2.3.2-0-1
description: Object.getPrototypeOf must exist as a function
---*/

assert.sameValue(typeof(Object.getPrototypeOf), "function", 'typeof(Object.getPrototypeOf)');
