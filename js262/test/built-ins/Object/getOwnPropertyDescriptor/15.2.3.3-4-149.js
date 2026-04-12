

/*---
es5id: 15.2.3.3-4-149
description: >
    Object.getOwnPropertyDescriptor returns data desc for functions on
    built-ins (Date.prototype.setUTCMinutes)
---*/

var desc = Object.getOwnPropertyDescriptor(Date.prototype, "setUTCMinutes");

assert.sameValue(desc.value, Date.prototype.setUTCMinutes, 'desc.value');
assert.sameValue(desc.writable, true, 'desc.writable');
assert.sameValue(desc.enumerable, false, 'desc.enumerable');
assert.sameValue(desc.configurable, true, 'desc.configurable');
