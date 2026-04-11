

/*---
esid: prod-NumericLiteralSeparator
description: >
  `.` DecimalDigit NumericLiteralSeparator DecimalDigits ExponentPart
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

assert.sameValue(.1_01e2, .101e2);
