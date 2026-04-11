

/*---
es5id: 15.2.4.4-2
description: >
    Object.prototype.valueOf - typeof
    Object.prototype.valueOf.call(false)==="object"
---*/

assert.sameValue(typeof Object.prototype.valueOf.call(false), "object", 'typeof Object.prototype.valueOf.call(false)');
