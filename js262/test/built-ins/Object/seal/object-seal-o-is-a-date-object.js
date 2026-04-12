

/*---
esid: sec-setintegritylevel
description: Object.seal - 'O' is a Date object
---*/

var dateObj = new Date(0);
var preCheck = Object.isExtensible(dateObj);
Object.seal(dateObj);

assert(preCheck, 'preCheck !== true');
assert(Object.isSealed(dateObj), 'Object.isSealed(dateObj) !== true');
