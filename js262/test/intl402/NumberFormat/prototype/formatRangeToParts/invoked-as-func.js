

/*---
esid: sec-Intl.NumberFormat-NumberFormat
description: basic tests internal slot initialization and call receiver errors
info: |
  Intl.NumberFormat.prototype.formatRangeToParts ( start, end )
  (...)
  2. Perform ? RequireInternalSlot(nf, [[InitializedNumberFormat]])
features: [Intl.NumberFormat-v3]
---*/

const nf = new Intl.NumberFormat();


let f = nf['formatRangeToParts'];

assert.sameValue(typeof f, 'function');
assert.throws(TypeError, () => { f(1, 23) });
