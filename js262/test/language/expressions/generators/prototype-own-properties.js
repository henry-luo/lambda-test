

/*---
es6id: 25.2.4.2
description: >
    The `prototype` property of GeneratorFunction instances are created as
    plain objects with no "own" properties.
features: [generators]
---*/

var ownProperties = Object.getOwnPropertyNames(function*() {}.prototype);
assert.sameValue(ownProperties.length, 0);
