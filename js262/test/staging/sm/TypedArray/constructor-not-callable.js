

/*---
includes: [sm/non262-TypedArray-shell.js]
description: |
  pending
esid: pending
---*/
for (var constructor of anyTypedArrayConstructors) {
    assert.throws(TypeError, () => constructor());
    assert.throws(TypeError, () => constructor(1));
    assert.throws(TypeError, () => constructor.call(null));
    assert.throws(TypeError, () => constructor.apply(null, []));
    assert.throws(TypeError, () => Reflect.apply(constructor, null, []));
}

