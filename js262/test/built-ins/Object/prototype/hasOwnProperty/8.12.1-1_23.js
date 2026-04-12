

/*---
es5id: 8.12.1-1_23
description: Properties - [[HasOwnProperty]] (literal inherited getter property)
---*/

var base = {
  get foo() {
    return 42;
  }
};
var o = Object.create(base);

assert.sameValue(o.hasOwnProperty("foo"), false, 'o.hasOwnProperty("foo")');
