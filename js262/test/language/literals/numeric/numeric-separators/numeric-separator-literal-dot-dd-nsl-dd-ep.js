

/*---
esid: prod-NumericLiteralSeparator
description: >
  `.` DecimalDigit NumericLiteralSeparator DecimalDigit ExponentPart
info: |
  NumericLiteralSeparator ::
    _

  DecimalLiteral ::
    . DecimalDigits ExponentPart_opt

  DecimalDigits ::
    DecimalDigit
    ...
    DecimalDigits NumericLiteralSeparator DecimalDigit

  ExponentIndicator :: one of
    e E

features: [numeric-separator-literal]
---*/

assert.sameValue(.0_1e2, .01e2);
