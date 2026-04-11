

/*---
esid: sec-temporal.plainyearmonth.from
description: Month code must be a string
features: [Temporal]
---*/

const monthCodeValues = [
  5, 5n, false, Symbol(), null, { toString: () => 5 }
];

const year = 2026;

for (const monthCode of monthCodeValues) {
  assert.throws(TypeError, () => Temporal.PlainYearMonth.from({
    year,
    monthCode,
    
  }), typeof monthCode === 'symbol' ?
      "Symbol should be rejected as month code" :
      `month code ${monthCode} should be rejected`);
}
