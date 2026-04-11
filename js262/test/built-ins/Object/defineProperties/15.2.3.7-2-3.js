

/*---
es5id: 15.2.3.7-2-3
description: >
    Object.defineProperties - argument 'Properties' is a boolean whose
    value is false
---*/

var obj = {};
var obj1 = Object.defineProperties(obj, false);

assert.sameValue(obj, obj1, 'obj');
