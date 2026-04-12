

/*---
esid: prod-NumericLiteralSeparator
description: >
  `0b` | `0B` BinaryDigits NumericLiteralSeparator BinaryDigit
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

features: [numeric-separator-literal]
---*/

assert.sameValue(0b01_0, 0b010);
assert.sameValue(0B01_0, 0B010);
