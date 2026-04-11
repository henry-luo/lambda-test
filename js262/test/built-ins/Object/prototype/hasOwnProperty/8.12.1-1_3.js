

/*---
es5id: 8.12.1-1_3
description: Properties - [[HasOwnProperty]] (old style inherited property)
---*/

var base = {
  foo: 42
};
var o = Object.create(base);

assert.sameValue(o.hasOwnProperty("foo"), false, 'o.hasOwnProperty("foo")');
