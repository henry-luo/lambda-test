

/*---
esid: sec-Intl.PluralRules.prototype.selectRang
description: >
  "selectRange" basic tests when argument  x > y, return a string.
info: |
  1.1.6 ResolvePluralRange ( pluralRules, x, y )
features: [Intl.NumberFormat-v3]
---*/

const pr = new Intl.PluralRules();


assert.sameValue(typeof pr.selectRange(201, 102), "string", "should not throw RangeError");
