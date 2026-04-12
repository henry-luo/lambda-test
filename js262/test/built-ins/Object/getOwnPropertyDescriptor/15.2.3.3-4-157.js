

/*---
es5id: 15.2.3.3-4-157
description: >
    Object.getOwnPropertyDescriptor returns data desc for functions on
    built-ins (Date.prototype.toDateString)
---*/

var desc = Object.getOwnPropertyDescriptor(Date.prototype, "toDateString");

assert.sameValue(desc.value, Date.prototype.toDateString, 'desc.value');
assert.sameValue(desc.writable, true, 'desc.writable');
assert.sameValue(desc.enumerable, false, 'desc.enumerable');
assert.sameValue(desc.configurable, true, 'desc.configurable');
