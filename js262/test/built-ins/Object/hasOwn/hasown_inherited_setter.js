

/*---
esid: sec-object.hasown
description: Properties - [[HasOwnProperty]] (literal inherited setter property)
author: Jamie Kyle
features: [Object.hasOwn]
---*/

var base = {
  set foo(x) {
  }
};
var o = Object.create(base);

assert.sameValue(Object.hasOwn(o, "foo"), false, 'Object.hasOwn(o, "foo")');
