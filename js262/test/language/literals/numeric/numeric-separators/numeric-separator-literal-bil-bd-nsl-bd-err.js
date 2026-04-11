

/*---
esid: prod-NumericLiteralSeparator
description: >
  NumericLiteralSeparator may not be the appear adjacent to `0b` | `0B` in a
  BinaryIntegerLiteral
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

0b_1
