

/*---
esid: sec-setintegritylevel
description: Object.seal - the extension of 'O' is prevented already
---*/

var obj = {};

obj.foo = 10; 
var preCheck = Object.isExtensible(obj);
Object.preventExtensions(obj);
Object.seal(obj);

assert(preCheck, 'preCheck !== true');
assert(Object.isSealed(obj), 'Object.isSealed(obj) !== true');
