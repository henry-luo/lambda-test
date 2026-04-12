

/*---
esid: prod-NumericLiteralSeparator
description: >
  NumericLiteralSeparator may not be the last digit character of a
  DecimalLiteral, nor adjacent to `.`
info: |
  NumericLiteralSeparator ::
    _

  DecimalLiteral ::
    . DecimalDigits ExponentPart_opt

  DecimalDigits ::
    ...
    DecimalDigits NumericLiteralSeparator DecimalDigit

negative:
  phase: parse
  type: SyntaxError

features: [numeric-separator-literal]
---*/

$DONOTEVALUATE();

._
