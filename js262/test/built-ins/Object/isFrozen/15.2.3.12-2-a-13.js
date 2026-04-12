

/*---
es5id: 15.2.3.12-2-a-13
description: Object.isFrozen - 'O' is a Function object
---*/

var obj = function() {};

Object.defineProperty(obj, "property", {
  value: 12,
  writable: true,
  configurable: false
});

Object.preventExtensions(obj);

assert.sameValue(Object.isFrozen(obj), false, 'Object.isFrozen(obj)');
