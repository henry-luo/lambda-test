

/*---
esid: sec-set.prototype.union
description: Set.prototype.union combines with Map
features: [set-methods]
includes: [compareArray.js]
---*/

const s1 = new Set([1, 2]);
const m1 = new Map([
  [2, "two"],
  [3, "three"],
]);
const expected = [1, 2, 3];
const combined = s1.union(m1);

assert.compareArray([...combined], expected);
assert.sameValue(combined instanceof Set, true, "The returned object is a Set");
