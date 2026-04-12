

/*---
es5id: 15.2.3.6-0-2
description: Object.defineProperty must exist as a function taking 3 parameters
---*/

assert.sameValue(Object.defineProperty.length, 3, 'Object.defineProperty.length');
