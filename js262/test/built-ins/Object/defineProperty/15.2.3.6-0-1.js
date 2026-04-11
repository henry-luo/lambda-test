

/*---
es5id: 15.2.3.6-0-1
description: Object.defineProperty must exist as a function
---*/

var f = Object.defineProperty;

assert.sameValue(typeof(f), "function", 'typeof(f)');
