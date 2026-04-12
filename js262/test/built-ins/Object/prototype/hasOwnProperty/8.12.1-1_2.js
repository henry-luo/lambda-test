

/*---
es5id: 8.12.1-1_2
description: Properties - [[HasOwnProperty]] (old style own property)
---*/

var o = {
  foo: 42
};

assert(o.hasOwnProperty("foo"), 'o.hasOwnProperty("foo") !== true');
