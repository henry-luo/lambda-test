

/*---
es6id: 11.8.3
description: Binary-integer-literal-like sequence expressed with unicode escape sequence
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

0\u00620;
