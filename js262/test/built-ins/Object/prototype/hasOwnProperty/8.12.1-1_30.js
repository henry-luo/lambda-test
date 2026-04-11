

/*---
es5id: 8.12.1-1_30
description: >
    Properties - [[HasOwnProperty]] (non-configurable, non-enumerable
    own setter property)
---*/

var o = {};
Object.defineProperty(o, "foo", {
  set: function() {;
  }
});

assert(o.hasOwnProperty("foo"), 'o.hasOwnProperty("foo") !== true');
