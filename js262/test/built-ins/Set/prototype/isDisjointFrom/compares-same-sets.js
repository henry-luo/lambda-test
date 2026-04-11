

/*---
esid: sec-set.prototype.isdisjointfrom
description: Set.prototype.isDisjointFrom can compare Sets that have the same content
features: [set-methods]
---*/

const s1 = new Set([1, 2]);
const s2 = new Set([1, 2]);

assert.sameValue(s1.isDisjointFrom(s2), false);
