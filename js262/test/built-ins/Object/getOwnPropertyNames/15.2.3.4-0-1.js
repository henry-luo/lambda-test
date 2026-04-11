

/*---
es5id: 15.2.3.4-0-1
description: Object.getOwnPropertyNames must exist as a function
---*/

assert.sameValue(typeof(Object.getOwnPropertyNames), "function", 'typeof(Object.getOwnPropertyNames)');
