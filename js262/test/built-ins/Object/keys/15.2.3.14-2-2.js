

/*---
es5id: 15.2.3.14-2-2
description: Object.keys returns the standard built-in Array (check [[Class]]
---*/

var o = {
  x: 1,
  y: 2
};

var a = Object.keys(o);
var s = Object.prototype.toString.call(a);

assert.sameValue(s, '[object Array]', 's');
