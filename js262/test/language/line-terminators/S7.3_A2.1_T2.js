

/*---
info: LINE FEED (U+000A) within strings is not allowed
es5id: 7.3_A2.1_T2
description: Use real LINE FEED into string
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


"
str
ing
";
