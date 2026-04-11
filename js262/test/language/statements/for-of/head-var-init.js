

/*---
esid: sec-iteration-statements
description: >
  Initializer is not allowed in head's ForBinding position.
info: |
  IterationStatement:
    for (var ForBinding of AssignmentExpression) Statement
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

for (var x = 1 of []) {}
