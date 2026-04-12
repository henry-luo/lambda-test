

/*---
es5id: 8.12.1-1_40
description: >
    Properties - [[HasOwnProperty]] (configurable, non-enumerable
    inherited getter property)
---*/

var base = {};
Object.defineProperty(base, "foo", {
  get: function() {
    return 42;
  },
  configurable: true
});
var o = Object.create(base);

assert.sameValue(o.hasOwnProperty("foo"), false, 'o.hasOwnProperty("foo")');
