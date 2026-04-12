

/*---
es6id: 9.5.7
description: >
    Return target.[[HasProperty]](P) if trap is undefined.
info: |
    [[HasProperty]] (P)

    ...
    8. If trap is undefined, then
        a. Return target.[[HasProperty]](P).
    ...
features: [Proxy]
---*/

var target = Object.create(Array.prototype);
var p = new Proxy(target, {});

assert.sameValue(("foo" in p), false);
assert.sameValue(("length" in p), true);
