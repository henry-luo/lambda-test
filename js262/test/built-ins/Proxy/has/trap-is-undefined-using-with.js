

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
flags: [noStrict]
features: [Proxy]
---*/

var target = Object.create(Array.prototype);
var p = new Proxy(target, {});

var foo = 3;
with(target) {
  assert.sameValue(length, 0);
  assert.sameValue(foo, 3);
}
