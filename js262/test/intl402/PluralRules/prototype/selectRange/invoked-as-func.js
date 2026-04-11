

/*---
esid: sec-Intl.PluralRules.prototype.selectRange
description: basic tests internal slot initialization and call receiver errors
info: |
  Intl.PluralRules.prototype.selectRange(start, end )
  (...)
  2. Perform ? RequireInternalSlot(pr, [[InitializedPluralRules]])
features: [Intl.NumberFormat-v3]
---*/

const pr = new Intl.PluralRules();


let sr = pr['selectRange'];

assert.sameValue(typeof sr, 'function');
assert.throws(TypeError, () => { sr(1, 23) });

