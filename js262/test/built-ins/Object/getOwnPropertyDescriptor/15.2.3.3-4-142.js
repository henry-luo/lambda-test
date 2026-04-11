

/*---
es5id: 15.2.3.3-4-142
description: >
    Object.getOwnPropertyDescriptor returns data desc for functions on
    built-ins (Date.prototype.setMinutes)
---*/

var desc = Object.getOwnPropertyDescriptor(Date.prototype, "setMinutes");

assert.sameValue(desc.value, Date.prototype.setMinutes, 'desc.value');
assert.sameValue(desc.writable, true, 'desc.writable');
assert.sameValue(desc.enumerable, false, 'desc.enumerable');
assert.sameValue(desc.configurable, true, 'desc.configurable');
