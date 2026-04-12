

/*---
es6id: 9.5.5
description: >
    Throws a TypeError exception if trap result is undefined and target property
    descriptor is undefined.
info: |
    [[GetOwnProperty]] (P)

    ...
    14. If trapResultObj is undefined, then
        a. If targetDesc is undefined, return undefined.
    ...
features: [Proxy]
---*/

var t = {};
var trapped;
var p = new Proxy(t, {
  getOwnPropertyDescriptor: function(target, prop) {
    trapped = true;
    return;
  }
});

assert.sameValue(
  Object.getOwnPropertyDescriptor(p, "attr"),
  undefined
);

assert(trapped);
