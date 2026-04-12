

/*---
es5id: 15.2.3.3-4-106
description: >
    Object.getOwnPropertyDescriptor returns data desc for functions on
    built-ins (Math.max)
---*/

var desc = Object.getOwnPropertyDescriptor(Math, "max");

assert.sameValue(desc.value, Math.max, 'desc.value');
assert.sameValue(desc.writable, true, 'desc.writable');
assert.sameValue(desc.enumerable, false, 'desc.enumerable');
assert.sameValue(desc.configurable, true, 'desc.configurable');
