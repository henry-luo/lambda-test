

/*---
es5id: 15.2.3.13-0-1
description: Object.isExtensible must exist as a function
---*/

var f = Object.isExtensible;

assert.sameValue(typeof(f), "function", 'typeof(f)');
