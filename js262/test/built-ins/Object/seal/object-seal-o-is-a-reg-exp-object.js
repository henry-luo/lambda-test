

/*---
esid: sec-setintegritylevel
description: Object.seal - 'O' is a RegExp object
---*/

var regObj = new RegExp();
var preCheck = Object.isExtensible(regObj);
Object.seal(regObj);

assert(preCheck, 'preCheck !== true');
assert(Object.isSealed(regObj), 'Object.isSealed(regObj) !== true');
