

/*---
es5id: 15.2.3.3-4-3
description: >
    Object.getOwnPropertyDescriptor returns an object representing an
    accessor desc for valid accessor properties
---*/

var o = {};


var getter = function() {
  return 1;
}
var d = {
  get: getter
};

Object.defineProperty(o, "foo", d);

var desc = Object.getOwnPropertyDescriptor(o, "foo");

assert.sameValue(desc.get, getter, 'desc.get');
assert.sameValue(desc.set, undefined, 'desc.set');
assert.sameValue(desc.enumerable, false, 'desc.enumerable');
assert.sameValue(desc.configurable, false, 'desc.configurable');
