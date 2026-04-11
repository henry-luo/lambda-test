

/*---
es5id: 8.12.1-1_34
description: >
    Properties - [[HasOwnProperty]] (non-configurable, non-enumerable
    own getter/setter property)
---*/

var o = {};
Object.defineProperty(o, "foo", {
  get: function() {
    return 42;
  },
  set: function() {;
  }
});

assert(o.hasOwnProperty("foo"), 'o.hasOwnProperty("foo") !== true');
