

/*---
es5id: 15.2.3.7-0-1
description: Object.defineProperties must exist as a function
---*/

var f = Object.defineProperties;

assert.sameValue(typeof(f), "function", 'typeof(f)');
