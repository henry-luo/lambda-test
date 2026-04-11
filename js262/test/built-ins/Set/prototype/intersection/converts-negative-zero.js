

/*---
esid: sec-set.prototype.intersection
description: Set.prototype.intersection converts -0𝔽 to +0𝔽
info: |
    7.c.ii.2 If nextValue is -0𝔽, set nextValue to +0𝔽.
features: [set-methods]
includes: [compareArray.js]
---*/

const setlikeWithMinusZero = {
  size: 1,
  has: function () {
    throw new Test262Error("Set.prototype.intersection should not invoke .has on its argument when this.size > arg.size");
  },
  keys: function () {
    
    return [-0].values();
  },
};

const s1 = new Set([0, 1, 2]);
let expected = [+0];
let combined = s1.intersection(setlikeWithMinusZero);

assert.compareArray([...combined], expected);
assert.sameValue(combined instanceof Set, true, "The returned object is a Set");
