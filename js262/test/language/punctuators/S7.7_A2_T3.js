

/*---
info: |
    Punctuator cannot be expressed as a Unicode escape sequence consisting of
    six characters, namely \u plus four hexadecimal digits
es5id: 7.7_A2_T3
description: Try to use [] as a Unicode \u005B\u005D
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

\u005B\u005D;
