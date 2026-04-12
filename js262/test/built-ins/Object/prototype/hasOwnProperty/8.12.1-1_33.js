

/*---
es5id: 8.12.1-1_33
description: >
    Properties - [[HasOwnProperty]] (configurable, enumerable own
    setter property)
---*/

var o = {};
Object.defineProperty(o, "foo", {
  set: function() {;
  },
  enumerable: true,
  configurable: true
});

assert(o.hasOwnProperty("foo"), 'o.hasOwnProperty("foo") !== true');
