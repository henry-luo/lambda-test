

/*---
esid: sec-object.hasown
description: Properties - [[HasOwnProperty]] (old style own property)
author: Jamie Kyle
features: [Object.hasOwn]
---*/

var o = {
  foo: 42
};

assert.sameValue(Object.hasOwn(o, "foo"), true, 'Object.hasOwn(o, "foo") !== true');
