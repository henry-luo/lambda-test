

/*---
es5id: 15.2.3.12-2-c-1
description: >
    Object.isFrozen returns false if 'O' contains own configurable
    data property
---*/

var obj = {};
Object.defineProperty(obj, "foo", {
  value: 20,
  writable: false,
  configurable: true
});

Object.preventExtensions(obj);

assert.sameValue(Object.isFrozen(obj), false, 'Object.isFrozen(obj)');
