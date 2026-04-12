

/*---
info: "UnicodeEscapeSequence :: u HexDigit (one, two or three time) is incorrect"
es5id: 7.8.4_A7.2_T3
description: ":: HexDigit :: 1"
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


"\u11"
