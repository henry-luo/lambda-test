

/*---
description: >
    GeneratorFunction instances are created with a unique prototype object.
es6id: 25.2.1
features: [generators]
---*/

function* g1() {}
function* g2() {}

assert(g1.prototype !== g2.prototype);
