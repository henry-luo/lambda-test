

/*---
es5id: 15.2.3.3-4-40
description: >
    Object.getOwnPropertyDescriptor returns data desc for functions on
    built-ins (Array.prototype.concat)
---*/

var desc = Object.getOwnPropertyDescriptor(Array.prototype, "concat");

assert.sameValue(desc.value, Array.prototype.concat, 'desc.value');
assert.sameValue(desc.writable, true, 'desc.writable');
assert.sameValue(desc.enumerable, false, 'desc.enumerable');
assert.sameValue(desc.configurable, true, 'desc.configurable');
