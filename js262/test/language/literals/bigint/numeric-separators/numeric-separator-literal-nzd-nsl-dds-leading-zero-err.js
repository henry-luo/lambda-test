

/*---
esid: prod-NumericLiteralSeparator
description: NonZeroDigit NumericLiteralSeparator DecimalDigits
info: |
  NumericLiteral ::
    DecimalIntegerLiteral BigIntLiteralSuffix
    NumericLiteralBase BigIntLiteralSuffix

  NumericLiteralBase ::
    BinaryIntegerLiteral
    OctalIntegerLiteral
    HexIntegerLiteral

  BigIntLiteralSuffix :: n

  NumericLiteralSeparator ::
    _

  DecimalIntegerLiteral ::
    ...
    NonZeroDigit NumericLiteralSeparator DecimalDigits

  NonZeroDigit :: one of
    1 2 3 4 5 6 7 8 9

negative:
  phase: parse
  type: SyntaxError
features: [BigInt, numeric-separator-literal]
---*/

$DONOTEVALUATE();

0_0123456789n;
