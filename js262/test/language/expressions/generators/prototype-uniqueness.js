

/*---
description: >
    GeneratorFunction instances are created with a unique prototype object.
es6id: 25.2.1
features: [generators]
---*/

var g1 = function*() {};
var g2 = function*() {};

assert(g1.prototype !== g2.prototype);
