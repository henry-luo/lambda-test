

/*---
esid: sec-number-format-functions
description: >
  Intl.NumberFormat.prototype.format converts its argument (called value) to a
  number using ToIntlMathematicalValue.
features: [Intl.NumberFormat-v3]
locale: [en-US]
---*/

var nf = new Intl.NumberFormat('en-US', {maximumFractionDigits: 20});


assert.sameValue(nf.format('100000'), '100,000');


assert.sameValue(nf.format('-100000'), '-100,000');

assert.sameValue(nf.format('1.0000000000000001'), '1.0000000000000001');
assert.sameValue(nf.format('-1.0000000000000001'), '-1.0000000000000001');
assert.sameValue(nf.format('987654321987654321'), '987,654,321,987,654,321');
assert.sameValue(nf.format('-987654321987654321'), '-987,654,321,987,654,321');
