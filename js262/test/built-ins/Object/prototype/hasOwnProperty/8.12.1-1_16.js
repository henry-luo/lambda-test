

/*---
es5id: 8.12.1-1_16
description: >
    Properties - [[HasOwnProperty]] (non-writable, configurable,
    enumerable inherited value property)
---*/

var base = {};
Object.defineProperty(base, "foo", {
  value: 42,
  configurable: true,
  enumerable: true
});
var o = Object.create(base);

assert.sameValue(o.hasOwnProperty("foo"), false, 'o.hasOwnProperty("foo")');
