

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  DecimalDigits `.` DecimalDigits NumericLiteralSeparator DecimalDigits
  ExponentPart SignedInteger

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

assert.sameValue(Number("10.00_01e2"), NaN, "10.00_01e2");
