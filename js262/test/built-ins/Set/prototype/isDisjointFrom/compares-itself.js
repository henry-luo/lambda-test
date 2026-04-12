

/*---
esid: sec-set.prototype.isdisjointfrom
description: Set.prototype.isDisjointFrom is successful when called on itself
features: [set-methods]
---*/

const s1 = new Set([1, 2]);

assert.sameValue(s1.isDisjointFrom(s1), false);
