

/*---
es5id: 15.2.3.9-0-1
description: Object.freeze must exist as a function
---*/

var f = Object.freeze;

assert.sameValue(typeof(f), "function", 'typeof(f)');
