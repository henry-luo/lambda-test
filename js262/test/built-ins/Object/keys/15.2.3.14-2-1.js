

/*---
es5id: 15.2.3.14-2-1
description: Object.keys returns the standard built-in Array
---*/

var o = {
  x: 1,
  y: 2
};

var a = Object.keys(o);

assert.sameValue(Array.isArray(a), true, 'Array.isArray(a)');
