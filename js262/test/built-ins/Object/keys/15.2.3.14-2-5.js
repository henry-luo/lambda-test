

/*---
es5id: 15.2.3.14-2-5
description: Object.keys returns the standard built-in Array that is not sealed
---*/

var o = {
  x: 1,
  y: 2
};

var a = Object.keys(o);

assert.sameValue(Object.isSealed(a), false, 'Object.isSealed(a)');
