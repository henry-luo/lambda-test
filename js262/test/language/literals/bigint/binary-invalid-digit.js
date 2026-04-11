

/*---
description: Binary BigInt literal containing an invalid digit
esid: prod-NumericLiteral
info: |
  NumericLiteral ::
    NumericLiteralBase NumericLiteralSuffix

  NumericLiteralBase ::
    DecimalLiteral
    BinaryIntegerLiteral
    OctalIntegerLiteral
    HexIntegerLiteral

  NumericLiteralSuffix :: n
negative:
  phase: parse
  type: SyntaxError
features: [BigInt]
---*/

$DONOTEVALUATE();

0b2n;
