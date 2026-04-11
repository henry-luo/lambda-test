

/*---
esid: sec-set.prototype.isdisjointfrom
description: Set.prototype.isDisjointFrom compares with Map
features: [set-methods]
---*/

const s1 = new Set([1, 2]);
const m1 = new Map([
  [2, "two"],
  [3, "three"],
]);

assert.sameValue(s1.isDisjointFrom(m1), false);
