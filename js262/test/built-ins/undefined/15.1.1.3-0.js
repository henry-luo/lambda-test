

/*---
esid: sec-undefined
description: >
    Global.undefined is a data property with default attribute values
    (false)
---*/

var desc = Object.getOwnPropertyDescriptor(this, 'undefined');

assert.sameValue(desc.writable, false, 'desc.writable');
assert.sameValue(desc.enumerable, false, 'desc.enumerable');
assert.sameValue(desc.configurable, false, 'desc.configurable');
