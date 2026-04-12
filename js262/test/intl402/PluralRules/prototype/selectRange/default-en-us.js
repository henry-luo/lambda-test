

/*---
description: Intl.PluralRules.prototype.selectRange default behaviour returning "few" or "other"
locale: [en-US]
features: [Intl.NumberFormat-v3]
---*/

const pr = new Intl.PluralRules("en-US");

assert.sameValue(pr.selectRange(102, 201), "other");
assert.sameValue(pr.selectRange(200, 200), "other");

