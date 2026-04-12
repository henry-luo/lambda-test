

/*---
es5id: 15.1.1.2-0
description: >
    Global.Infinity is a data property with default attribute values
    (false)
---*/

var desc = Object.getOwnPropertyDescriptor(this, 'Infinity');

assert.sameValue(desc.writable, false, 'desc.writable');
assert.sameValue(desc.enumerable, false, 'desc.enumerable');
assert.sameValue(desc.configurable, false, 'desc.configurable');
