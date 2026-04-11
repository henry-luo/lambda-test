

/*---
es5id: 15.2.3.10-0-1
description: Object.preventExtensions must exist as a function
---*/

var f = Object.preventExtensions;

assert.sameValue(typeof(f), "function", 'typeof(f)');
