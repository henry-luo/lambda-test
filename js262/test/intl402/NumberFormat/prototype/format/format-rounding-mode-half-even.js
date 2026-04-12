

/*---
esid: sec-intl.numberformat.prototype.format
description: >
  When roundingMode is "halfEven", rounding tends toward the closest value
  with ties tending toward the value with even cardinality
features: [Intl.NumberFormat-v3]
includes: [testIntl.js]
---*/

var locales = [
  new Intl.NumberFormat().resolvedOptions().locale, 'ar', 'de', 'th', 'ja'
];
var numberingSystems = ['arab', 'latn', 'thai', 'hanidec'];

testNumberFormat(
  locales,
  numberingSystems,
  {useGrouping: false, roundingMode: 'halfEven', maximumSignificantDigits: 2},
  {
    '1.101': '1.1',
    '1.15': '1.2',
    '1.1999': '1.2',
    '1.25': '1.2',
    '0': '0',
    '-0': '-0',
    '-1.101': '-1.1',
    '-1.15': '-1.2',
    '-1.1999': '-1.2',
    '-1.25': '-1.2'
  }
);

