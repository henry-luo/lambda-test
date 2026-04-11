

/*---
description: Lexical declaration (const) not allowed in statement position
esid: sec-labelled-statements
es6id: 13.13
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

label: const x = null;
