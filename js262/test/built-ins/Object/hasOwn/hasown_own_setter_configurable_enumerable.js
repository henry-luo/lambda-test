

/*---
esid: sec-object.hasown
description: >
    Properties - [[HasOwnProperty]] (configurable, enumerable own
    setter property)
author: Jamie Kyle
features: [Object.hasOwn]
---*/

var o = {};
Object.defineProperty(o, "foo", {
  set: function() {;
  },
  enumerable: true,
  configurable: true
});

assert.sameValue(Object.hasOwn(o, "foo"), true, 'Object.hasOwn(o, "foo") !== true');
