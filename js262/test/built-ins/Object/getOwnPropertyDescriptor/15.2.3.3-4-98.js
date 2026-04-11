

/*---
es5id: 15.2.3.3-4-98
description: >
    Object.getOwnPropertyDescriptor returns data desc for functions on
    built-ins (Math.asin)
---*/

var desc = Object.getOwnPropertyDescriptor(Math, "asin");

assert.sameValue(desc.value, Math.asin, 'desc.value');
assert.sameValue(desc.writable, true, 'desc.writable');
assert.sameValue(desc.enumerable, false, 'desc.enumerable');
assert.sameValue(desc.configurable, true, 'desc.configurable');
