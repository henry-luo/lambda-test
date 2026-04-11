

/*---
info: |
    Step 4 of defineProperty calls the [[DefineOwnProperty]] internal method
    of O to define the property. Step 7b of [[DefineOwnProperty]] rejects if
    current.[[Enumerable]] and desc.[[Enumerable]] are the boolean negations
    of each other.
es5id: 15.2.3.6-4-9
description: >
    Object.defineProperty throws TypeError when changing
    [[Enumerable]] from true to false on non-configurable data
    properties
---*/

var o = {};


var d1 = {
  value: 101,
  enumerable: true,
  configurable: false
};
Object.defineProperty(o, "foo", d1);


var desc = {
  value: 101,
  enumerable: false
};
assert.throws(TypeError, function() {
  Object.defineProperty(o, "foo", desc);
});

var d2 = Object.getOwnPropertyDescriptor(o, "foo");
assert.sameValue(d2.value, 101, 'd2.value');
assert.sameValue(d2.enumerable, true, 'd2.enumerable');
assert.sameValue(d2.configurable, false, 'd2.configurable');
