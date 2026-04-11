

/*---
description: Lexical declaration (const) not allowed in statement position
esid: sec-if-statement
es6id: 13.6
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

if (true) const x = null; else const y = null;
