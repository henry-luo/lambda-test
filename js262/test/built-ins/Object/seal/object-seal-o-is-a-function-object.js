

/*---
esid: sec-setintegritylevel
description: Object.seal - 'O' is a Function object
---*/

var fun = function() {};
var preCheck = Object.isExtensible(fun);
Object.seal(fun);

assert(preCheck, 'preCheck !== true');
assert(Object.isSealed(fun), 'Object.isSealed(fun) !== true');
