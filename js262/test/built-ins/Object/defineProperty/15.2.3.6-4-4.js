

/*---
info: |
    Step 4 of defineProperty calls the [[DefineOwnProperty]] internal method
    of O to define the property. For newly defined properties, step 4.a.1 of
    [[DefineOwnProperty]] creates a data property if handed a generic desc.
es5id: 15.2.3.6-4-4
description: >
    Object.defineProperty defines a data property if given a generic
    desc(8.12.9 step 4.a.i)
---*/

var o = {};

var desc = {};
Object.defineProperty(o, "foo", desc);

var propDesc = Object.getOwnPropertyDescriptor(o, "foo");

assert.sameValue(propDesc.value, undefined, 'propDesc.value'); 
assert.sameValue(propDesc.writable, false, 'propDesc.writable'); 
assert.sameValue(propDesc.enumerable, false, 'propDesc.enumerable'); 
assert.sameValue(propDesc.configurable, false, 'propDesc.configurable'); 
