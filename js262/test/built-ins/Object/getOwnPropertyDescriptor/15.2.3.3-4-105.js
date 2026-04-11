

/*---
es5id: 15.2.3.3-4-105
description: >
    Object.getOwnPropertyDescriptor returns data desc for functions on
    built-ins (Math.log)
---*/

var desc = Object.getOwnPropertyDescriptor(Math, "log");

assert.sameValue(desc.value, Math.log, 'desc.value');
assert.sameValue(desc.writable, true, 'desc.writable');
assert.sameValue(desc.enumerable, false, 'desc.enumerable');
assert.sameValue(desc.configurable, true, 'desc.configurable');
