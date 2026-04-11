

/*---
esid: sec-intl.numberformat.prototype.format
description: Tests that the digits are determined correctly when specifying at same time «"minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits"»
features: [Intl.NumberFormat-v3]
includes: [testIntl.js]
---*/

var locales = [new Intl.NumberFormat().resolvedOptions().locale, "ar", "de", "th", "ja"];
var numberingSystems = ["latn", "arab", "thai", "hanidec"];

var nfTestMatrix = [
  
  [{ useGrouping: false, minimumFractionDigits: 1, maximumFractionDigits: 4, minimumSignificantDigits: 1, maximumSignificantDigits: 2 }, { 1.23456: "1.2" }],
  [{ useGrouping: false, minimumFractionDigits: 2, maximumFractionDigits: 4, minimumSignificantDigits: 1, maximumSignificantDigits: 2 }, { 1.23456: "1.2" }],
  
  [{ useGrouping: false, minimumFractionDigits: 2, maximumFractionDigits: 4, minimumSignificantDigits: 2, maximumSignificantDigits: 3 }, { 1.23456: "1.23" }],
  
  [{ useGrouping: false, minimumFractionDigits: 1, maximumFractionDigits: 2, minimumSignificantDigits: 1, maximumSignificantDigits: 4}, { 1.23456: "1.235" }],
  [{ useGrouping: false, minimumFractionDigits: 1, maximumFractionDigits: 2, minimumSignificantDigits: 2, maximumSignificantDigits: 4}, { 1.23456: "1.235" }],
];

nfTestMatrix.forEach((nfTestValues)=>{
  testNumberFormat(locales, numberingSystems,  ...nfTestValues)
})
