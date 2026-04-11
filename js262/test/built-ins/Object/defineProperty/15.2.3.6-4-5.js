

/*---
info: |
    Step 4 of defineProperty calls the [[DefineOwnProperty]] internal method
    of O to define the property. Step 6 of [[DefineOwnProperty]] returns if
    every field of desc also occurs in current and every field in desc has
    the same value as current.
es5id: 15.2.3.6-4-5
description: >
    Object.defineProperty is no-op if current and desc are the same
    data desc
---*/

function sameDataDescriptorValues(d1, d2) {
  return (d1.value === d2.value &&
    d1.enumerable === d2.enumerable &&
    d1.writable === d2.writable &&
    d1.configurable === d2.configurable);
}

var o = {};


o["foo"] = 101;


var d1 = Object.getOwnPropertyDescriptor(o, "foo");


var desc = {
  value: 101,
  enumerable: true,
  writable: true,
  configurable: true
};
Object.defineProperty(o, "foo", desc);

var d2 = Object.getOwnPropertyDescriptor(o, "foo");

assert.sameValue(sameDataDescriptorValues(d1, d2), true, 'sameDataDescriptorValues(d1, d2)');
