

/*---
esid: prod-NumericLiteralSeparator
description: >
  `0x` | `0X` HexDigits NumericLiteralSeparator HexDigit
info: |
  NumericLiteralSeparator ::
    _

  HexIntegerLiteral ::
    0x HexDigits
    0X HexDigits

  HexDigits ::
    HexDigit
    HexDigits HexDigit
    HexDigits NumericLiteralSeparator HexDigit

  HexDigit::one of
    0 1 2 3 4 5 6 7 8 9 a b c d e f A B C D E F

features: [numeric-separator-literal]
---*/

assert.sameValue(0x01_00, 0x0100);
assert.sameValue(0X01_00, 0X0100);
