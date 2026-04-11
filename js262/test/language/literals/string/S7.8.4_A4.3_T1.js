

/*---
info: NonEscapeSequence is not EscapeCharacter
es5id: 7.8.4_A4.3_T1
description: "EscapeCharacter :: DecimalDigits :: 1"
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();

"\1"
