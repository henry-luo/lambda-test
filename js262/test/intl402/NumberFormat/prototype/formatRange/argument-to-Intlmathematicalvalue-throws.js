

/*---
esid: sec-Intl.NumberFormat-formatRange
description: >
  "formatRange" basic tests when argument cannot be converted using ToIntlMathematicalValue
info: |
  Intl.NumberFormat.prototype.formatRange( start, end )
  (...)
  4. Let x be ? ToIntlMathematicalValue(start).
  5. Let y be ? ToIntlMathematicalValue(end).
features: [Intl.NumberFormat-v3]
---*/


const nf = new Intl.NumberFormat();


assert.throws(TypeError, () => { nf.formatRange(Symbol(102), 201) });
assert.throws(TypeError, () => { nf.formatRange(102,Symbol(201)) });
