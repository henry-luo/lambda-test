

/*---
esid: prod-NumericLiteralSeparator
description: >
  `.` DecimalDigits NumericLiteralSeparator DecimalDigits ExponentPart
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

assert.sameValue(.00_01e2, .0001e2);
