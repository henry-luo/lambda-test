

/*---
esid: sec-object.hasown
description: >
    Properties - [[HasOwnProperty]] (literal inherited getter/setter
    property)
author: Jamie Kyle
features: [Object.hasOwn]
---*/

var base = {
  get foo() {
    return 42;
  },
  set foo(x) {
  }
};
var o = Object.create(base);

assert.sameValue(Object.hasOwn(o, "foo"), false, 'Object.hasOwn(o, "foo")');
