

/*---
es5id: 8.12.1-1_12
description: >
    Properties - [[HasOwnProperty]] (non-writable, non-configurable,
    non-enumerable inherited value property)
---*/

var base = {};
Object.defineProperty(base, "foo", {
  value: 42
});
var o = Object.create(base);

assert.sameValue(o.hasOwnProperty("foo"), false, 'o.hasOwnProperty("foo")');
