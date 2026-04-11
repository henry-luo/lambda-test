

/*---
es5id: 8.12.1-1_27
description: >
    Properties - [[HasOwnProperty]] (non-configurable, enumerable own
    getter property)
---*/

var o = {};
Object.defineProperty(o, "foo", {
  get: function() {
    return 42;
  },
  enumerable: true
});

assert(o.hasOwnProperty("foo"), 'o.hasOwnProperty("foo") !== true');
