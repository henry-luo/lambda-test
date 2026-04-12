

/*---
es5id: 11.1.5-2gs
description: >
    Duplicate definitions of data properties are allowed in ObjectLiterals.
---*/

var obj = { _11_1_5_2_gs: 10, _11_1_5_2_gs: 20 };
assert.sameValue(obj._11_1_5_2_gs, 20);
