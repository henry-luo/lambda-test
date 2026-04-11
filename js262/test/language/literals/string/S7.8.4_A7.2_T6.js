

/*---
info: "UnicodeEscapeSequence :: u HexDigit (one, two or three time) is incorrect"
es5id: 7.8.4_A7.2_T6
description: ":: HexDigit :: A"
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


"\uAAA"
