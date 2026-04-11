

/*---
esid: sec-iteration-statements
description: >
  Initializer is not allowed in head's ForDeclaration position.
info: |
  IterationStatement:
    for (ForDeclaration of AssignmentExpression) Statement
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

for (const [x] = 1 of []) {}
