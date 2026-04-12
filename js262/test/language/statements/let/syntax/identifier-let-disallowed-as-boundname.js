

/*---
es6id: 13.6.4.1
description: >
    It is a Syntax Error if the BoundNames of ForDeclaration contains "let".
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
for (let let in {}) { }

