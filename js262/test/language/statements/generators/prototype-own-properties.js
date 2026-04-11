

/*---
es6id: 25.2.4.2
description: >
    The `prototype` property of GeneratorFunction instances are created as
    plain objects with no "own" properties.
features: [generators]
---*/

function* g() {}
var ownProperties = Object.getOwnPropertyNames(g.prototype);
assert.sameValue(ownProperties.length, 0);
