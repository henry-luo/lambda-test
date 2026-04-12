

/*---
es5id: 15.2.3.3-4-147
description: >
    Object.getOwnPropertyDescriptor returns data desc for functions on
    built-ins (Date.prototype.setUTCDate)
---*/

var desc = Object.getOwnPropertyDescriptor(Date.prototype, "setUTCDate");

assert.sameValue(desc.value, Date.prototype.setUTCDate, 'desc.value');
assert.sameValue(desc.writable, true, 'desc.writable');
assert.sameValue(desc.enumerable, false, 'desc.enumerable');
assert.sameValue(desc.configurable, true, 'desc.configurable');
