

/*---
info: |
    Step 4 of defineProperty calls the [[DefineOwnProperty]] internal method
    of O to define the property. Step 7a of [[DefineOwnProperty]] rejects if
    current.[[Configurable]] is false and desc.[[Configurable]] is true.
es5id: 15.2.3.6-4-7
description: >
    Object.defineProperty throws TypeError when changing
    [[Configurable]] from false to true
---*/

var o = {};


var d1 = {
  value: 101,
  configurable: false
};
Object.defineProperty(o, "foo", d1);

var desc = {
  value: 101,
  configurable: true
};
assert.throws(TypeError, function() {
  Object.defineProperty(o, "foo", desc);
});

var d2 = Object.getOwnPropertyDescriptor(o, "foo");
assert.sameValue(d2.value, 101, 'd2.value');
assert.sameValue(d2.configurable, false, 'd2.configurable');
