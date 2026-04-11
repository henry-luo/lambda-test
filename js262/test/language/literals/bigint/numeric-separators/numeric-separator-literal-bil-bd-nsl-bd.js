

/*---
esid: prod-NumericLiteralSeparator
description: >
  `0b` | `0B` BinaryDigit NumericLiteralSeparator BinaryDigit
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

  BinaryIntegerLiteral ::
    0b BinaryDigits
    0B BinaryDigits

  BinaryDigits ::
    BinaryDigit
    BinaryDigits BinaryDigit
    BinaryDigits NumericLiteralSeparator BinaryDigit

  BinaryDigit :: one of
    0 1

features: [BigInt, numeric-separator-literal]
---*/

assert.sameValue(0b0_1n, 0b01n);
assert.sameValue(0B0_1n, 0B01n);
