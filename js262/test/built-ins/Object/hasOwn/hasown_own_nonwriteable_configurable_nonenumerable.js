

/*---
esid: sec-object.hasown
description: >
    Properties - [[HasOwnProperty]] (non-writable, configurable,
    non-enumerable own value property)
author: Jamie Kyle
features: [Object.hasOwn]
---*/

var o = {};
Object.defineProperty(o, "foo", {
  value: 42,
  configurable: true
});

assert.sameValue(Object.hasOwn(o, "foo"), true, 'Object.hasOwn(o, "foo") !== true');
