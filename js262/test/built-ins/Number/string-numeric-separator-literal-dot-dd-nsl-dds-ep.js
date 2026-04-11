

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  `.` DecimalDigit NumericLiteralSeparator DecimalDigits ExponentPart

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

assert.sameValue(Number(".1_01e2"), NaN, ".1_01e2");
