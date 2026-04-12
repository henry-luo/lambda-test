

/*---
description: |
  pending
esid: pending
---*/
var obj = { method() { } };
assert.throws(TypeError, () => {
    new obj.method;
});

obj = { constructor() { } };
assert.throws(TypeError, () => {
    new obj.constructor;
});

