

/*---
esid: prod-NumericLiteralSeparator
description: >
  NonZeroDigit NumericLiteralSeparator DecimalDigits sequence expressed with
  unicode escape sequence
info: |
  NumericLiteralSeparator::
    _

  DecimalIntegerLiteral::
    ...
    NonZeroDigit NumericLiteralSeparator_opt DecimalDigits

negative:
  phase: parse
  type: SyntaxError

features: [numeric-separator-literal]
---*/

$DONOTEVALUATE();

1\u005F0123456789
