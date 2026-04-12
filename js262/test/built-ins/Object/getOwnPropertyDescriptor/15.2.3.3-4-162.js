

/*---
es5id: 15.2.3.3-4-162
description: >
    Object.getOwnPropertyDescriptor returns data desc for functions on
    built-ins (Date.prototype.toJSON)
---*/

var desc = Object.getOwnPropertyDescriptor(Date.prototype, "toJSON");

assert.sameValue(desc.value, Date.prototype.toJSON, 'desc.value');
assert.sameValue(desc.writable, true, 'desc.writable');
assert.sameValue(desc.enumerable, false, 'desc.enumerable');
assert.sameValue(desc.configurable, true, 'desc.configurable');
