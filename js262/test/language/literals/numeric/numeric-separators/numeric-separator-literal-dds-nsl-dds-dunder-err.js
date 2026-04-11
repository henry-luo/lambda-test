

/*---
esid: prod-NumericLiteralSeparator
description: >
  NumericLiteralSeparator may not appear adjacent to another
  NumericLiteralSeparator in DecimalIntegerLiteral
info: |
  NumericLiteralSeparator ::
    _

  DecimalIntegerLiteral ::
    ...
    NonZeroDigit NumericLiteralSeparator_opt DecimalDigits

negative:
  phase: parse
  type: SyntaxError

features: [numeric-separator-literal]
---*/

$DONOTEVALUATE();

10__0123456789
