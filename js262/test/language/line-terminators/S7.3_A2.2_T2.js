

/*---
info: CARRIAGE RETURN (U+000D) within strings is not allowed
es5id: 7.3_A2.2_T2
description: Insert real CARRIAGE RETURN into string
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


"
str
ing
";
