

/*---
esid: prod-NumericLiteralSeparator
description: >
  `.` DecimalDigits NumericLiteralSeparator DecimalDigit ExponentPart
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

assert.sameValue(.10_1e2, .101e2);
