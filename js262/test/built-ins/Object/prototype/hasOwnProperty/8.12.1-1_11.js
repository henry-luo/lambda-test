

/*---
es5id: 8.12.1-1_11
description: >
    Properties - [[HasOwnProperty]] (writable, configurable,
    enumerable own value property)
---*/

var o = {};
Object.defineProperty(o, "foo", {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: true
});

assert(o.hasOwnProperty("foo"), 'o.hasOwnProperty("foo") !== true');
