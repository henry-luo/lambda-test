

/*---
esid: sec-set.prototype.symmetricdifference
description: Set.prototype.symmetricDifference converts -0𝔽 to +0𝔽
info: |
    7.b.ii If nextValue is -0𝔽, set nextValue to +0𝔽.
features: [set-methods]
includes: [compareArray.js]
---*/

const setlikeWithMinusZero = {
  size: 1,
  has: function () {
    throw new Test262Error("Set.prototype.symmetricDifference should not invoke .has on its argument");
  },
  keys: function () {
    
    return [-0].values();
  },
};

const s1 = new Set([1, 2]);
let expected = [1, 2, +0];
let combined = s1.symmetricDifference(setlikeWithMinusZero);

assert.compareArray([...combined], expected);
assert.sameValue(combined instanceof Set, true, "The returned object is a Set");
