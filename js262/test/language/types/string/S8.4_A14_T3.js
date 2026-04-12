

/*---
info: When appears not closed double-quote program failes
es5id: 8.4_A14_T3
description: Try to create variable using 4 double-quote
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var str = """";
