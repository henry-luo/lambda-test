

/*---
esid: sec-set.prototype.issupersetof
description: Set.prototype.isSupersetOf compares Sets
features: [set-methods]
---*/

const s1 = new Set([1, 2]);
const s2 = new Set([2, 3]);

assert.sameValue(s1.isSupersetOf(s2), false);

const s3 = new Set([1]);

assert.sameValue(s1.isSupersetOf(s3), true);
