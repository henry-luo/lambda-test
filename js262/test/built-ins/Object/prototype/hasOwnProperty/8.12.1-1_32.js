

/*---
es5id: 8.12.1-1_32
description: >
    Properties - [[HasOwnProperty]] (configurable, non-enumerable own
    setter property)
---*/

var o = {};
Object.defineProperty(o, "foo", {
  set: function() {;
  },
  configurable: true
});

assert(o.hasOwnProperty("foo"), 'o.hasOwnProperty("foo") !== true');
