

/*---
description: Lexical declaration (let) not allowed in statement position
esid: sec-if-statement
es6id: 13.6
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

if (true) let x; else ;
