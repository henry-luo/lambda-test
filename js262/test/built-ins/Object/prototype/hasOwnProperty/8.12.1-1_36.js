

/*---
es5id: 8.12.1-1_36
description: >
    Properties - [[HasOwnProperty]] (configurable, non-enumerable own
    getter/setter property)
---*/

var o = {};
Object.defineProperty(o, "foo", {
  get: function() {
    return 42;
  },
  set: function() {;
  },
  configurable: true
});

assert(o.hasOwnProperty("foo"), 'o.hasOwnProperty("foo") !== true');
