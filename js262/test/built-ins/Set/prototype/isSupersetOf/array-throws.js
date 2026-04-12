

/*---
esid: sec-set.prototype.issupersetof
description: Set.prototype.isSupersetOf doesn't work with arrays
features: [set-methods]
---*/

const s1 = new Set([1, 2]);
const s2 = [3];
assert.throws(
  TypeError,
  function () {
    s1.isSupersetOf(s2);
  },
  "Throws an error when an array is used"
);
