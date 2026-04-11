

/*---
esid: sec-initializenumberformat
description: >
  Monkey-patching Object.prototype does not change the default
  options for NumberFormat as a null prototype is used.
info: |
  InitializeNumberFormat ( numberFormat, locales, options )

    1. If _options_ is *undefined*, then
      1. Let _options_ be ObjectCreate(*null*).
---*/

let defaultMaximumFractionDigits =
    new Intl.NumberFormat("en").resolvedOptions().maximumFractionDigits;

Object.prototype.maximumFractionDigits = 1;
let formatter = new Intl.NumberFormat("en");
assert.sameValue(formatter.resolvedOptions().maximumFractionDigits,
                 defaultMaximumFractionDigits);
