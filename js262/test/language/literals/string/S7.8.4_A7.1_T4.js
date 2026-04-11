

/*---
info: |
    EscapeSequence :: UnicodeEscapeSequence :: u HexDigit HexDigit HexDigit
    HexDigit
es5id: 7.8.4_A7.1_T4
description: "UnicodeEscapeSequence :: u000G is incorrect"
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


"\u000G"
