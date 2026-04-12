

/*---
esid: sec-setintegritylevel
description: Object.seal - 'O' is sealed already
---*/

var obj = {};

obj.foo = 10; 
var preCheck = Object.isExtensible(obj);
Object.seal(obj);

Object.seal(obj);

assert(preCheck, 'preCheck !== true');
assert(Object.isSealed(obj), 'Object.isSealed(obj) !== true');
