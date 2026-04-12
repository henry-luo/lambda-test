

/*---
esid: sec-setintegritylevel
description: Object.seal - returned object is not extensible
---*/

var obj = {};
var preCheck = Object.isExtensible(obj);
Object.seal(obj);

assert(preCheck, 'preCheck !== true');
assert.sameValue(Object.isExtensible(obj), false, 'Object.isExtensible(obj)');
