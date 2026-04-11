

/*---
es6id: 11.8.3
description: Binary-integer-literal-like sequence containing an invalid digit
info: |
    BinaryIntegerLiteral ::
      0b BinaryDigits
      0B BinaryDigits
    BinaryDigits ::
      BinaryDigit
      BinaryDigits BinaryDigit
    BinaryDigit :: one of
      0 1
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

0b2;
