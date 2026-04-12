

/*---
es5id: 15.2.3.12-2-c-2
description: >
    Object.isFrozen returns false if 'O' contains own configurable
    accessor property
---*/

var obj = {};

function get_func() {
  return 10;
}

function set_func() {}

Object.defineProperty(obj, "foo", {
  get: get_func,
  set: set_func,
  configurable: true
});

Object.preventExtensions(obj);

assert.sameValue(Object.isFrozen(obj), false, 'Object.isFrozen(obj)');
