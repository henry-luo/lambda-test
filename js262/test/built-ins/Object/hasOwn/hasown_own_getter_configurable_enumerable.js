

/*---
esid: sec-object.hasown
description: >
    Properties - [[HasOwnProperty]] (configurable, enumerable own
    getter property)
author: Jamie Kyle
features: [Object.hasOwn]
---*/

var o = {};
Object.defineProperty(o, "foo", {
  get: function() {
    return 42;
  },
  enumerable: true,
  configurable: true
});

assert.sameValue(Object.hasOwn(o, "foo"), true, 'Object.hasOwn(o, "foo") !== true');
