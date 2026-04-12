

/*---
es5id: 15.2.3.3-4-146
description: >
    Object.getOwnPropertyDescriptor returns data desc for functions on
    built-ins (Date.prototype.setUTCMonth)
---*/

var desc = Object.getOwnPropertyDescriptor(Date.prototype, "setUTCMonth");

assert.sameValue(desc.value, Date.prototype.setUTCMonth, 'desc.value');
assert.sameValue(desc.writable, true, 'desc.writable');
assert.sameValue(desc.enumerable, false, 'desc.enumerable');
assert.sameValue(desc.configurable, true, 'desc.configurable');
