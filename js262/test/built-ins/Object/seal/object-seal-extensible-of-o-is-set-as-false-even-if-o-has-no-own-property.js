

/*---
esid: sec-object.seal
description: >
    Object.seal - extensible of 'O' is set as false even if 'O' has no
    own property
---*/

var obj = {};

var preCheck = Object.isExtensible(obj);

Object.seal(obj);

assert(preCheck, 'preCheck !== true');
assert.sameValue(Object.isExtensible(obj), false, 'Object.isExtensible(obj)');
