

/*---
esid: sec-intl.numberformat.prototype.format
description: >
  When roungingPriority is "morePrecision", the constraint which produces the
  more precise result is preferred
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
  {useGrouping: false, roundingPriority: 'morePrecision', minimumSignificantDigits: 2, minimumFractionDigits: 2},
  {'1': '1.0'}
);


testNumberFormat(
  locales,
  numberingSystems,
  {useGrouping: false, roundingPriority: 'morePrecision', minimumSignificantDigits: 3, minimumFractionDigits: 2},
  {'1': '1.00'}
);


testNumberFormat(
  locales,
  numberingSystems,
  {useGrouping: false, roundingPriority: 'morePrecision', maximumSignificantDigits: 2, maximumFractionDigits: 2},
  {'1.23': '1.23'}
);


testNumberFormat(
  locales,
  numberingSystems,
  {useGrouping: false, roundingPriority: 'morePrecision', maximumSignificantDigits: 3, maximumFractionDigits: 1},
  {'1.234': '1.23'}
);
