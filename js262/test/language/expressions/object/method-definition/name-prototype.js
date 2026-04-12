

/*---
description: >
    The prototype of functions declared as methods is the Function prototype.
es6id: 14.3.8
---*/

var obj = { method() {} };
assert.sameValue(Object.getPrototypeOf(obj.method), Function.prototype);
