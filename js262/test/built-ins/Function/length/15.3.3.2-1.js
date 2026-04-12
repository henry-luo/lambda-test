

/*---
es5id: 15.3.3.2-1
description: Function.length - data property with value 1
---*/

var desc = Object.getOwnPropertyDescriptor(Function, "length");

assert.sameValue(desc.value, 1, 'desc.value');
assert.sameValue(desc.writable, false, 'desc.writable');
assert.sameValue(desc.enumerable, false, 'desc.enumerable');
assert.sameValue(desc.configurable, true, 'desc.configurable');
