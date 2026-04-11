

/*---
info: |
    Step 4 of defineProperty calls the [[DefineOwnProperty]] internal method
    of O to define the property. For non-configurable properties, step 10.a.ii.1
    of [[DefineOwnProperty]] rejects changing the value of non-writable properties.
es5id: 15.2.3.6-4-17
description: >
    Object.defineProperty throws TypeError when changing value of
    non-writable non-configurable data properties
---*/

var o = {};


var d1 = {
  value: 101
};
Object.defineProperty(o, "foo", d1);


var desc = {
  value: 102
};
assert.throws(TypeError, function() {
  Object.defineProperty(o, "foo", desc);
});

var d2 = Object.getOwnPropertyDescriptor(o, "foo");

assert.sameValue(d2.value, 101, 'd2.value');
assert.sameValue(d2.writable, false, 'd2.writable');
assert.sameValue(d2.enumerable, false, 'd2.enumerable');
assert.sameValue(d2.configurable, false, 'd2.configurable');
