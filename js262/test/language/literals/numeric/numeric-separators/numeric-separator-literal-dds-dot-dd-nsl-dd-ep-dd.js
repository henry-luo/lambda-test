

/*---
esid: prod-NumericLiteralSeparator
description: >
  DecimalDigits `.` DecimalDigits NumericLiteralSeparator DecimalDigits
  ExponentPart SignedInteger
info: |
  NumericLiteralSeparator ::
    _

  DecimalLiteral ::
    . DecimalDigits ExponentPart_opt

  DecimalDigits ::
    ...
    DecimalDigits NumericLiteralSeparator DecimalDigit

  ExponentIndicator :: one of
    e E

features: [numeric-separator-literal]
---*/

assert.sameValue(10.00_01e2, 10.0001e2);
