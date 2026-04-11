

/*---
esid: prod-NumericLiteralSeparator
description: >
  NumericLiteralSeparator may not appear adjacent to another
  NumericLiteralSeparator in a BinaryIntegerLiteral
info: |
  NumericLiteralSeparator ::
    _

  BinaryIntegerLiteral ::
    0b BinaryDigits
    0B BinaryDigits

  BinaryDigits ::
    BinaryDigit
    BinaryDigits BinaryDigit
    BinaryDigits NumericLiteralSeparator BinaryDigit

  BinaryDigit :: one of
    0 1

negative:
  phase: parse
  type: SyntaxError

features: [numeric-separator-literal]
---*/

$DONOTEVALUATE();

0b0__0
