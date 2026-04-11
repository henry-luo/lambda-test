

/*---
esid: sec-object.hasown
description: >
    Properties - [[HasOwnProperty]] (writable, non-configurable,
    non-enumerable own value property)
author: Jamie Kyle
features: [Object.hasOwn]
---*/

var o = {};
Object.defineProperty(o, "foo", {
  value: 42,
  writable: true
});

assert.sameValue(Object.hasOwn(o, "foo"), true, 'Object.hasOwn(o, "foo") !== true');
