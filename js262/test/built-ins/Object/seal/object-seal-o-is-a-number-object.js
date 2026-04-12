

/*---
esid: sec-setintegritylevel
description: Object.seal - 'O' is a Number object
---*/

var numObj = new Number(3);
var preCheck = Object.isExtensible(numObj);
Object.seal(numObj);

assert(preCheck, 'preCheck !== true');
assert(Object.isSealed(numObj), 'Object.isSealed(numObj) !== true');
