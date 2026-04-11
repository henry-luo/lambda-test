

/*---
esid: sec-tonumber-applied-to-the-string-type
description: >
  The NSL does not affect strings parsed by parseFloat - DecimalDigit
info: |
  StrDecimalDigits :::
    DecimalDigit
    StrDecimalDigits DecimalDigit

features: [numeric-separator-literal]
---*/

assert.sameValue(parseFloat("1_0123456789"), 1);
