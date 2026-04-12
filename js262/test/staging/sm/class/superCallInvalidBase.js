

/*---
description: |
  pending
esid: pending
---*/
class instance extends null {
    constructor() { super(); }
}

assert.throws(TypeError, () => new instance());
assert.throws(TypeError, () => new class extends null { }());

