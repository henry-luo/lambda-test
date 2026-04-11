

/*---
es5id: 15.2.3.3-4-45
description: >
    Object.getOwnPropertyDescriptor returns data desc for functions on
    built-ins (Array.prototype.toString)
---*/

var desc = Object.getOwnPropertyDescriptor(Array.prototype, "toString");

assert.sameValue(desc.value, Array.prototype.toString, 'desc.value');
assert.sameValue(desc.writable, true, 'desc.writable');
assert.sameValue(desc.enumerable, false, 'desc.enumerable');
assert.sameValue(desc.configurable, true, 'desc.configurable');
