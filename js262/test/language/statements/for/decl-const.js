

/*---
description: Lexical declaration (const) not allowed in statement position
esid: sec-for-statement
es6id: 13.7.4
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

for ( ; false; ) const x = null;
