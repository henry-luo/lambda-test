

/*---
esid: sec-object.hasown
description: Properties - [[HasOwnProperty]] (property does not exist)
author: Jamie Kyle
features: [Object.hasOwn]
---*/

var o = {};

assert.sameValue(Object.hasOwn(o, "foo"), false, 'Object.hasOwn(o, "foo")');
