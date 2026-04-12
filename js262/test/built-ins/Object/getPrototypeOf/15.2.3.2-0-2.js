

/*---
es5id: 15.2.3.2-0-2
description: Object.getPrototypeOf must exist as a function taking 1 parameter
---*/

assert.sameValue(Object.getPrototypeOf.length, 1, 'Object.getPrototypeOf.length');
