

/*---
esid: sec-object.hasown
description: >
    Properties - [[HasOwnProperty]] (configurable, enumerable
    inherited setter property)
author: Jamie Kyle
features: [Object.hasOwn]
---*/

var base = {};
Object.defineProperty(base, "foo", {
  set: function() {;
  },
  enumerable: true,
  configurable: true
});
var o = Object.create(base);

assert.sameValue(Object.hasOwn(o, "foo"), false, 'Object.hasOwn(o, "foo")');
