

/*---
es5id: 8.12.1-1_17
description: >
    Properties - [[HasOwnProperty]] (writable, non-configurable,
    enumerable inherited value property)
---*/

var base = {};
Object.defineProperty(base, "foo", {
  value: 42,
  writable: true,
  enumerable: true
});
var o = Object.create(base);

assert.sameValue(o.hasOwnProperty("foo"), false, 'o.hasOwnProperty("foo")');
