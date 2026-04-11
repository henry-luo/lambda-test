

/*---
esid: sec-object.hasown
description: Properties - [[HasOwnProperty]] (literal own setter property)
author: Jamie Kyle
features: [Object.hasOwn]
---*/

var o = {
  set foo(x) {
  }
};

assert.sameValue(Object.hasOwn(o, "foo"), true, 'Object.hasOwn(o, "foo") !== true');
