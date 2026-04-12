

/*---
info: |
    Punctuator cannot be expressed as a Unicode escape sequence consisting of
    six characters, namely \u plus four hexadecimal digits
es5id: 7.7_A2_T5
description: Try to use . as a Unicode \u002E
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

x = 1;
this\u002Ex;
