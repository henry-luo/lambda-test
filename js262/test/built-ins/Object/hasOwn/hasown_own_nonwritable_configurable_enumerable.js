

/*---
esid: sec-object.hasown
description: >
    Properties - [[HasOwnProperty]] (non-writable, configurable,
    enumerable own value property)
author: Jamie Kyle
features: [Object.hasOwn]
---*/

var o = {};
Object.defineProperty(o, "foo", {
  value: 42,
  configurable: true,
  enumerable: true
});

assert.sameValue(Object.hasOwn(o, "foo"), true, 'Object.hasOwn(o, "foo") !== true');
