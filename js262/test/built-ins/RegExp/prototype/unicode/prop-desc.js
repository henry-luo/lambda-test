

/*---
es6id: 21.2.5.15
description: >
    `unicode` property descriptor
info: |
    RegExp.prototype.unicode is an accessor property whose set accessor
    function is undefined.
---*/

var desc = Object.getOwnPropertyDescriptor(RegExp.prototype, 'unicode');

assert.sameValue(desc.set, undefined);
assert.sameValue(typeof desc.get, 'function');
