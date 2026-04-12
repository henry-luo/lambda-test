

/*---
description: |
  pending
esid: pending
---*/

assert.throws(
    TypeError,
    () => {
      {let i=1}
      {let j=1; [][j][2]}
    }
);

