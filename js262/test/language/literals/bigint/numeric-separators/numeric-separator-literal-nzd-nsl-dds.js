

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
    NonZeroDigit NumericLiteralSeparator_opt DecimalDigits

  NonZeroDigit :: one of
    1 2 3 4 5 6 7 8 9

  DecimalDigits ::
    ...
    DecimalDigits DecimalDigit
    ...

features: [BigInt, numeric-separator-literal]
---*/

assert.sameValue(1_0123456789n, 10123456789n);
