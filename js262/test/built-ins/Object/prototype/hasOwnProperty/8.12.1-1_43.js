

/*---
es5id: 8.12.1-1_43
description: >
    Properties - [[HasOwnProperty]] (non-configurable, enumerable
    inherited setter property)
---*/

var base = {};
Object.defineProperty(base, "foo", {
  set: function() {;
  },
  enumerable: true
});
var o = Object.create(base);

assert.sameValue(o.hasOwnProperty("foo"), false, 'o.hasOwnProperty("foo")');
