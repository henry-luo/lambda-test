

/*---
description: >
    A Generator object is an instance of a generator function.
es6id: 25.3
features: [generators]
---*/

var g = function*() {};

assert(g() instanceof g, 'Instance created via function invocation');
