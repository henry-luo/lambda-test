

/*---
info: When appears not closed single-quote program failes
es5id: 8.4_A13_T3
description: Try to create variable using 4 single-quote
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var str = '''';
