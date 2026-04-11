

/*---
esid: sec-set.prototype.isdisjointfrom
description: Set.prototype.isDisjointFrom compares Sets
features: [set-methods]
---*/

const s1 = new Set([1, 2]);
const s2 = new Set([2, 3]);

assert.sameValue(s1.isDisjointFrom(s2), false);

const s3 = new Set([3]);

assert.sameValue(s1.isDisjointFrom(s3), true);
