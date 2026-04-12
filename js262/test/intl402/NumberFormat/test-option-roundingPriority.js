

/*---
esid: sec-intl.numberformat
description: Tests that the option roundingPriority is processed correctly.
features: [Intl.NumberFormat-v3]
includes: [testIntl.js]
---*/

testOption(
  Intl.NumberFormat,
  "roundingPriority",
  "string",
  ["auto", "morePrecision", "lessPrecision"],
  "auto"
);
