

/*---
es5id: 8.12.1-1_42
description: >
    Properties - [[HasOwnProperty]] (non-configurable, non-enumerable
    inherited setter property)
---*/

var base = {};
Object.defineProperty(base, "foo", {
  set: function() {;
  }
});
var o = Object.create(base);

assert.sameValue(o.hasOwnProperty("foo"), false, 'o.hasOwnProperty("foo")');
