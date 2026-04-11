

/*---
esid: sec-intl.numberformat.prototype.format
description: >
  When roungingPriority is "auto", the constraint on significant digits is
  preferred over the constraint on fraction digits
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
  {useGrouping: false, roundingPriority: 'auto', minimumSignificantDigits: 2, minimumFractionDigitsDigits: 2},
  {'1': '1.0'}
);


testNumberFormat(
  locales,
  numberingSystems,
  {useGrouping: false, roundingPriority: 'auto', minimumSignificantDigits: 3, minimumFractionDigitsDigits: 2},
  {'1': '1.00'}
);


testNumberFormat(
  locales,
  numberingSystems,
  {useGrouping: false, roundingPriority: 'auto', maximumSignificantDigits: 2, maximumFractionDigitsDigits: 2},
  {'1.23': '1.2'}
);


testNumberFormat(
  locales,
  numberingSystems,
  {useGrouping: false, roundingPriority: 'auto', maximumSignificantDigits: 3, maximumFractionDigitsDigits: 1},
  {'1.234': '1.23'}
);
