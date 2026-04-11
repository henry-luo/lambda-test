

/*---
es5id: 8.12.1-1_25
description: >
    Properties - [[HasOwnProperty]] (literal inherited getter/setter
    property)
---*/

var base = {
  get foo() {
    return 42;
  },
  set foo(x) {;
  }
};
var o = Object.create(base);

assert.sameValue(o.hasOwnProperty("foo"), false, 'o.hasOwnProperty("foo")');
