

/*---
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


with ({x: 1, [Symbol.unscopables]: {x: true}})
    assert.throws(ReferenceError, () => x);

