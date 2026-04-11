

/*---
es5id: 8.12.1-1_44
description: >
    Properties - [[HasOwnProperty]] (configurable, non-enumerable
    inherited setter property)
---*/

var base = {};
Object.defineProperty(base, "foo", {
  set: function() {;
  },
  configurable: true
});
var o = Object.create(base);

assert.sameValue(o.hasOwnProperty("foo"), false, 'o.hasOwnProperty("foo")');
