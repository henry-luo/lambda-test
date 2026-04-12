

/*---
es6id: 14.5
description: >
    class implicit constructor
---*/
class C {}
var c = new C();
assert.sameValue(
    Object.getPrototypeOf(c),
    C.prototype,
    "`Object.getPrototypeOf(c)` returns `C.prototype`"
);
