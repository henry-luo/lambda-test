

/*---
es5id: 8.12.1-1_21
description: Properties - [[HasOwnProperty]] (literal own setter property)
---*/

var o = {
  set foo(x) {;
  }
};

assert(o.hasOwnProperty("foo"), 'o.hasOwnProperty("foo") !== true');
