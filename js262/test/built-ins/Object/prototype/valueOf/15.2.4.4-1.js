

/*---
es5id: 15.2.4.4-1
description: >
    Object.prototype.valueOf - typeof
    Object.prototype.valueOf.call(true)==="object"
---*/

assert.sameValue(typeof Object.prototype.valueOf.call(true), "object", 'typeof Object.prototype.valueOf.call(true)');
