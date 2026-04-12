

/*---
es5id: 15.2.3.1
description: >
    Object.prototype is a data property with default attribute values
    (false)
---*/

var desc = Object.getOwnPropertyDescriptor(Object, 'prototype');

assert.sameValue(desc.writable, false, 'desc.writable');
assert.sameValue(desc.enumerable, false, 'desc.enumerable');
assert.sameValue(desc.configurable, false, 'desc.configurable');
