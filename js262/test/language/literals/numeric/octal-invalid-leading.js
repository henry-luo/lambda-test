

/*---
es6id: 11.8.3
description: Octal-integer-literal-like sequence with a leading 0
info: |
    OctalIntegerLiteral ::
      0o OctalDigits
      0O OctalDigits
    OctalDigits ::
      OctalDigit
      OctalDigits OctalDigit
    OctalDigit :: one of
      0 1 2 3 4 5 6 7
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

00o0;
