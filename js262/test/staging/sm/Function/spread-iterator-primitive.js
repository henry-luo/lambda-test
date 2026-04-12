

/*---
description: |
  Returning non-object from @@iterator should throw
info: bugzilla.mozilla.org/show_bug.cgi?id=1021835
esid: pending
---*/

let primitives = [
    1,
    true,
    undefined,
    null,
    "foo",
    Symbol.iterator
];

function f() {
}

for (let primitive of primitives) {
    let arg = {
        [Symbol.iterator]() {
            return primitive;
        }
    };
    assert.throws(TypeError, () => f(...arg));
}
