

/*---
es5id: 15.2.3.2-1-4
description: Object.getPrototypeOf returns String.prototype if 'O' is a string
---*/

assert.sameValue(Object.getPrototypeOf("abc"), String.prototype, 'Object.getPrototypeOf("abc")');
