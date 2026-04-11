

/*---
esid: sec-object.hasown
description: >
    Properties - [[HasOwnProperty]] (non-configurable, non-enumerable
    inherited setter property)
author: Jamie Kyle
features: [Object.hasOwn]
---*/

var base = {};
Object.defineProperty(base, "foo", {
  set: function() {;
  }
});
var o = Object.create(base);

assert.sameValue(Object.hasOwn(o, "foo"), false, 'Object.hasOwn(o, "foo")');
