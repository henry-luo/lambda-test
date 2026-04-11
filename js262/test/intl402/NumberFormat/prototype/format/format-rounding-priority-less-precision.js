

/*---
esid: sec-intl.numberformat.prototype.format
description: >
  When roungingPriority is "lessPrecision", the constraint which produces the
  less precise result is preferred
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
  {useGrouping: false, roundingPriority: 'lessPrecision', minimumSignificantDigits: 2, minimumFractionDigits: 2},
  {'1': '1.00'}
);


testNumberFormat(
  locales,
  numberingSystems,
  {useGrouping: false, roundingPriority: 'lessPrecision', minimumSignificantDigits: 3, minimumFractionDigits: 1},
  {'1': '1.0'}
);


testNumberFormat(
  locales,
  numberingSystems,
  {useGrouping: false, roundingPriority: 'lessPrecision', maximumSignificantDigits: 2, maximumFractionDigits: 2},
  {'1.23': '1.2'}
);


testNumberFormat(
  locales,
  numberingSystems,
  {useGrouping: false, roundingPriority: 'lessPrecision', maximumSignificantDigits: 3, maximumFractionDigits: 1},
  {'1.234': '1.2'}
);
