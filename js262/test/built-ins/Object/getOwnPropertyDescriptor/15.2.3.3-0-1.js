

/*---
es5id: 15.2.3.3-0-1
description: Object.getOwnPropertyDescriptor must exist as a function
---*/

assert.sameValue(typeof(Object.getOwnPropertyDescriptor), "function", 'typeof(Object.getOwnPropertyDescriptor)');
