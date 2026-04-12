

/*---
esid: sec-tonumber-applied-to-the-string-type
description: >
  The NSL does not affect strings parsed by parseFloat - . StrDecimalDigits StrExponentPart
info: |
  StrUnsignedDecimalLiteral :::
    . StrDecimalDigits StrExponentPart

  StrDecimalDigits :::
    DecimalDigit
    StrDecimalDigits DecimalDigit

features: [numeric-separator-literal]
---*/

assert.sameValue(parseFloat(".10_1e2"), .10);
