

/*---
es5id: 8.12.1-1_35
description: >
    Properties - [[HasOwnProperty]] (non-configurable, enumerable own
    getter/setter property)
---*/

var o = {};
Object.defineProperty(o, "foo", {
  get: function() {
    return 42;
  },
  set: function() {;
  },
  enumerable: true
});

assert(o.hasOwnProperty("foo"), 'o.hasOwnProperty("foo") !== true');
