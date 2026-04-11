

/*---
es5id: 8.12.1-1_31
description: >
    Properties - [[HasOwnProperty]] (non-configurable, enumerable own
    setter property)
---*/

var o = {};
Object.defineProperty(o, "foo", {
  set: function() {;
  },
  enumerable: true
});

assert(o.hasOwnProperty("foo"), 'o.hasOwnProperty("foo") !== true');
