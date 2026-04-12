

/*---
es5id: 8.12.1-1_26
description: >
    Properties - [[HasOwnProperty]] (non-configurable, non-enumerable
    own getter property)
---*/

var o = {};
Object.defineProperty(o, "foo", {
  get: function() {
    return 42;
  }
});

assert(o.hasOwnProperty("foo"), 'o.hasOwnProperty("foo") !== true');
