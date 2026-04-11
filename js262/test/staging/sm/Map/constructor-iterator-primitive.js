

/*---
description: |
  Returning non-object from @@iterator should throw
info: bugzilla.mozilla.org/show_bug.cgi?id=1021835
esid: pending
---*/

let ctors = [
    Map,
    Set,
    WeakMap,
    WeakSet
];

let primitives = [
    1,
    true,
    undefined,
    null,
    "foo",
    Symbol.iterator
];

for (let ctor of ctors) {
    for (let primitive of primitives) {
        let arg = {
            [Symbol.iterator]() {
                return primitive;
            }
        };
        assert.throws(TypeError, () => new ctor(arg));
    }
}
