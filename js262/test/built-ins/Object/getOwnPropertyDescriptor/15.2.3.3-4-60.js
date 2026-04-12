

/*---
es5id: 15.2.3.3-4-60
description: >
    Object.getOwnPropertyDescriptor returns data desc for functions on
    built-ins (Array.prototype.reduceRight)
---*/

var desc = Object.getOwnPropertyDescriptor(Array.prototype, "reduceRight");

assert.sameValue(desc.value, Array.prototype.reduceRight, 'desc.value');
assert.sameValue(desc.writable, true, 'desc.writable');
assert.sameValue(desc.enumerable, false, 'desc.enumerable');
assert.sameValue(desc.configurable, true, 'desc.configurable');
