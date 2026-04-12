

/*---
info: |
    Step 4 of defineProperty calls the [[DefineOwnProperty]] internal method
    of O to define the property. For configurable properties, step 9b of
    [[DefineOwnProperty]] permits changing the kind of a property.
es5id: 15.2.3.6-4-14
description: >
    Object.defineProperty permits changing data property to accessor
    property for configurable properties
---*/

var o = {};


o["foo"] = 101;


var getter = function() {
  return 1;
}
var d1 = {
  get: getter
};
Object.defineProperty(o, "foo", d1);

var d2 = Object.getOwnPropertyDescriptor(o, "foo");

assert.sameValue(d2.get, getter, 'd2.get');
assert.sameValue(d2.enumerable, true, 'd2.enumerable');
assert.sameValue(d2.configurable, true, 'd2.configurable');
